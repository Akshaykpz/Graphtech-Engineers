import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import BuildingCanvas from './components/BuildingCanvas';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import QuoteModal from './components/QuoteModal';
import Footer from './components/Footer';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation Bar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Scroll-Driven Building Experience (Home) */}
        <BuildingCanvas onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* About Section: ENGINEERING WITH PURPOSE */}
        <About />

        {/* Services Section: 6 Cards */}
        <Services onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Projects Section: Portfolio Showcase */}
        <Projects onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Construction Process Timeline */}
        <Process />

        {/* Contact Section: LET'S BUILD SOMETHING GREAT */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Quote Estimation Scoping Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

    </div>
  );
}

export default App;
