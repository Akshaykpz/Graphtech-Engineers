import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, ArrowRight, Compass } from 'lucide-react';

const Navbar = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Exact Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#9B7B30] flex items-center justify-center p-0.5 shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-full h-full bg-[#070709] rounded-[10px] flex items-center justify-center p-1">
                <img src="/favicon.svg" alt="Graphtech Engineers Logo" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
              </div>
            </div>
            <div className="flex flex-col truncate">
              <span className="font-display text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-300 truncate">
                Graphtech Engineers
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-zinc-400 font-medium truncate">
                Architecture • Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-black bg-[#D4AF37] shadow-md shadow-[#D4AF37]/20 font-bold'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="relative group overflow-hidden rounded-full p-[1px] font-medium focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-amber-200 to-[#C5A059] rounded-full animate-pulse group-hover:opacity-100 transition-opacity"></span>
              <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#070709] text-xs font-bold uppercase tracking-wider text-[#D4AF37] group-hover:bg-transparent group-hover:text-black transition-all duration-300">
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-full bg-[#D4AF37] hover:bg-[#C5A059] text-black text-[11px] font-bold uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/20"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-[#D4AF37]/50 focus:outline-none transition-colors"
              aria-label="Open Mobile Sidebar Menu"
            >
              <Menu className="w-5 h-5 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </div>

      {/* Right-Side Slide-Over Mobile Sidebar Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Dark Overlay Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm transition-opacity animate-fadeIn md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Right Slide Panel Drawer */}
          <div className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-[#0C0D11] border-l border-[#D4AF37]/30 shadow-2xl p-6 flex flex-col justify-between md:hidden animate-slideLeft">
            
            {/* Drawer Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37] p-0.5 flex items-center justify-center">
                    <img src="/favicon.svg" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-sm font-bold text-white">Graphtech</span>
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold">Engineers</span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close Mobile Sidebar"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Sidebar Navigation Items */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.name.toLowerCase();
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-bold'
                          : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-3.5 h-3.5 opacity-60 ${isActive ? 'text-black' : 'text-[#D4AF37]'}`} />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer & Quick Contact */}
            <div className="space-y-4 pt-6 border-t border-zinc-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-1.5 text-[11px] text-zinc-400 font-mono text-center">
                <p>+1 (800) 472-7483</p>
                <p className="text-zinc-500">inquiry@graphtechengineers.com</p>
              </div>
            </div>

          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
