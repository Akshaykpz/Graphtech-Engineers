import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Play, Pause, Compass, Eye, Layers, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;

const BuildingCanvas = ({ onOpenQuote }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameObjRef = useRef({ frame: 0 });
  
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const tourTweenRef = useRef(null);

  const lastDrawnFrameRef = useRef(-1);

  // Preload and pre-decode all 240 frames for maximum runtime clarity
  useEffect(() => {
    let mounted = true;
    const loadedImages = [];
    let count = 0;

    const padZero = (num) => String(num).padStart(4, '0');

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/frame-${padZero(i)}.jpg`;

      const handleImageReady = () => {
        if (!mounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onload = () => {
        if (!mounted) return;
        if ('decode' in img) {
          img.decode().catch(() => {}).finally(handleImageReady);
        } else {
          handleImageReady();
        }
      };

      img.onerror = () => {
        if (!mounted) return;
        handleImageReady();
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      mounted = false;
    };
  }, []);

  // Draw frame on canvas with maximum clarity, high-DPI retina support, and pixel-perfect integer alignment
  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Handle high DPI screens for maximum sharpness (up to DPR 3)
    const dpr = Math.max(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const targetWidth = Math.round(rect.width * dpr);
    const targetHeight = Math.round(rect.height * dpr);
    
    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    // Set maximum quality image smoothing (Bicubic / Lanczos filtering)
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const canvasAspect = targetWidth / targetHeight;
    const imgAspect = img.naturalWidth / img.naturalHeight;
    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasAspect > imgAspect) {
      renderWidth = targetWidth;
      renderHeight = targetWidth / imgAspect;
      xOffset = 0;
      yOffset = (targetHeight - renderHeight) / 2;
    } else {
      renderHeight = targetHeight;
      renderWidth = targetHeight * imgAspect;
      xOffset = (targetWidth - renderWidth) / 2;
      yOffset = 0;
    }

    // Integer pixel rounding eliminates sub-pixel antialiasing blurriness
    const roundedX = Math.round(xOffset);
    const roundedY = Math.round(yOffset);
    const roundedW = Math.round(renderWidth);
    const roundedH = Math.round(renderHeight);

    ctx.drawImage(img, roundedX, roundedY, roundedW, roundedH);
  };

  // Initial draw and window resize handling
  useEffect(() => {
    if (!isLoaded) return;
    renderFrame(0);

    const handleResize = () => {
      renderFrame(Math.round(frameObjRef.current.frame));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded]);

  // GSAP ScrollTrigger timeline setup
  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=450%', // Pinned length for smooth scroll sequence
          pin: true,
          scrub: 0.5, // Crisp responsive scrubbing with smooth inertia
          onUpdate: (self) => {
            const progress = self.progress;
            const targetFrame = Math.min(
              TOTAL_FRAMES - 1,
              Math.floor(progress * TOTAL_FRAMES)
            );
            if (targetFrame !== lastDrawnFrameRef.current) {
              lastDrawnFrameRef.current = targetFrame;
              frameObjRef.current.frame = targetFrame;
              setCurrentFrameIndex(targetFrame);
              renderFrame(targetFrame);
            }
          },
        },
      });

      // Frame tweening inside timeline
      scrollTimeline.to(frameObjRef.current, {
        frame: TOTAL_FRAMES - 1,
        ease: 'none',
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  // Auto Tour Playback handler
  const toggleAutoTour = () => {
    if (isPlayingTour) {
      if (tourTweenRef.current) tourTweenRef.current.kill();
      setIsPlayingTour(false);
    } else {
      setIsPlayingTour(true);
      const startFrame = currentFrameIndex >= TOTAL_FRAMES - 1 ? 0 : currentFrameIndex;
      frameObjRef.current.frame = startFrame;
      
      tourTweenRef.current = gsap.to(frameObjRef.current, {
        frame: TOTAL_FRAMES - 1,
        duration: 12,
        ease: 'power1.inOut',
        onUpdate: () => {
          const idx = Math.round(frameObjRef.current.frame);
          if (idx !== lastDrawnFrameRef.current) {
            lastDrawnFrameRef.current = idx;
            setCurrentFrameIndex(idx);
            renderFrame(idx);
          }
        },
        onComplete: () => {
          setIsPlayingTour(false);
        },
      });
    }
  };

  // Determine stage description based on progress
  const getStageInfo = (index) => {
    const pct = (index / (TOTAL_FRAMES - 1)) * 100;
    if (pct < 15) return { name: 'EXTERIOR VIEW', detail: '0% — Full Exterior Facade' };
    if (pct < 35) return { name: 'ENTRANCE APPROACH', detail: '20% — Approaching Main Entrance' };
    if (pct < 55) return { name: 'MAIN ENTRANCE', detail: '40% — Entering Main Portal' };
    if (pct < 75) return { name: 'LOBBY & HALL', detail: '60% — Grand Atrium & Hall' };
    if (pct < 90) return { name: 'INTERIOR ROOMS', detail: '80% — Architectural Suites' };
    return { name: 'FINAL INTERIOR', detail: '100% — Master Interior View' };
  };

  const stage = getStageInfo(currentFrameIndex);
  const loadingPct = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <section id="home" ref={containerRef} className="relative w-full h-screen bg-[#070709] overflow-hidden select-none">
      
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-40 bg-[#070709] flex flex-col items-center justify-center p-6">
          <div className="w-16 h-16 rounded-full border-2 border-zinc-800 border-t-[#D4AF37] animate-spin mb-6"></div>
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              Graphtech Engineers
            </h3>
            <p className="text-xs uppercase tracking-widest text-zinc-400">
              Loading 3D Architectural Experience... {loadingPct}%
            </p>
          </div>
          <div className="w-64 h-1 bg-zinc-900 rounded-full mt-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] transition-all duration-300"
              style={{ width: `${loadingPct}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* HTML5 Canvas - Crisp Maximum Clarity Render */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />

      {/* Subtle Overlay Vignette & Grid */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/20 to-black/60 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-10" />
      <div className="architectural-line-v left-12 hidden md:block z-10" />
      <div className="architectural-line-v right-12 hidden md:block z-10" />
      <div className="architectural-line-h bottom-24 hidden md:block z-10" />

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-20 sm:pt-28 pb-6 sm:pb-10 pointer-events-none">
        
        {/* Top Hero Text */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 pointer-events-auto mt-2 sm:mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
              Graphtech Engineers
            </span>
          </div>

          <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            WE BUILD YOUR VISION <br className="hidden sm:inline" />
            <span className="text-gold-gradient">INTO REALITY.</span>
          </h1>

          <p className="font-display text-sm sm:text-xl font-medium tracking-wide text-zinc-300 flex items-center gap-2 sm:gap-3">
            <span>Design</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Engineer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Construct</span>
          </p>
        </div>

        {/* Center Prompt */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 pointer-events-auto my-auto opacity-90 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-300 animate-bounce">
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
          </div>
        </div>

        {/* Bottom Interactive HUD Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-3 sm:gap-4 pointer-events-auto w-full">
          
          {/* Stage Progress Indicator */}
          <div className="bg-[#0C0D11]/90 backdrop-blur-md border border-white/10 p-3.5 sm:p-4 rounded-2xl max-w-sm w-full space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-mono text-[10px] sm:text-xs">FRAME {String(currentFrameIndex + 1).padStart(3, '0')} / {TOTAL_FRAMES}</span>
              <span className="text-[#D4AF37] font-bold tracking-wider text-[11px] sm:text-xs">{stage.name}</span>
            </div>
            
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] transition-all duration-150"
                style={{ width: `${((currentFrameIndex + 1) / TOTAL_FRAMES) * 100}%` }}
              />
            </div>
            
            <p className="text-[10px] sm:text-[11px] text-zinc-400 font-mono tracking-tight truncate">
              {stage.detail}
            </p>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={toggleAutoTour}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-white transition-all backdrop-blur-md"
            >
              {isPlayingTour ? (
                <>
                  <Pause className="w-4 h-4 text-[#D4AF37]" />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-[#D4AF37]" />
                  <span>Auto Tour</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenQuote}
              className="flex-1 sm:flex-initial px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#D4AF37] hover:bg-[#C5A059] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#D4AF37]/20 text-center"
            >
              Get a Quote
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default BuildingCanvas;
