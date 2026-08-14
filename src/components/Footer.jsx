import React from 'react';
import { Compass, ArrowUp, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

const Footer = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 text-zinc-400 overflow-hidden pt-20 pb-12">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#9B7B30] flex items-center justify-center p-0.5 shadow-lg shadow-[#D4AF37]/20">
                <div className="w-full h-full bg-[#070709] rounded-[10px] flex items-center justify-center p-1">
                  <img src="/favicon.svg" alt="Graphtech Engineers Logo" className="w-7 h-7 object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  Graphtech Engineers
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Engineering • Architecture • Construction
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              <strong className="text-white">Graphtech Engineers</strong> is a full-service structural engineering and architectural firm specializing in landmark high-rises, custom residential estates, and complex commercial infrastructure.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#C5A059] transition-all shadow-md shadow-[#D4AF37]/20"
              >
                Get a Quote
              </button>

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {['Home', 'About', 'Services', 'Projects', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>Architectural Design</li>
              <li>Structural Engineering</li>
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Project Management</li>
              <li>Renovation & Remodeling</li>
            </ul>
          </div>

          {/* Col 5: Contact Direct */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>100 Architectural Tower, Suite 400</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+1 (800) 472-7483</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>inquiry@graphtechengineers.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-300 font-semibold">Graphtech Engineers</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Structural ISO 9001 Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
