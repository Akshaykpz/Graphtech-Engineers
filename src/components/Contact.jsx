import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Phone, Mail, MapPin, Send, Compass, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Commercial Construction',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFFFFF', '#C5A059'],
    });
  };

  const projectTypes = [
    'Architectural Design',
    'Structural Engineering',
    'Residential Construction',
    'Commercial Construction',
    'Project Management',
    'Renovation & Remodeling',
  ];

  return (
    <section id="contact" className="relative py-28 bg-[#070709] border-t border-white/5 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <span>Start Your Journey</span>
          </div>
          
          <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            LET'S BUILD <br className="hidden sm:inline" />
            <span className="text-gold-gradient">SOMETHING GREAT.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base">
            Partner with <strong className="text-white">Graphtech Engineers</strong> for world-class architectural design, structural precision, and turnkey project delivery.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Brand & Details */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-[#0C0D11] border border-[#D4AF37]/30 space-y-6 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center text-black font-bold shadow-lg shadow-[#D4AF37]/20">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  {/* Exact Brand Name */}
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    Graphtech Engineers
                  </h3>
                  {/* Exact Display Text */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                    Engineering • Architecture • Construction
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Whether you require high-rise structural calculations, luxury residential construction, or commercial master planning, our engineering team is ready to assist.
              </p>

              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div className="flex items-start gap-4 text-sm text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase block">Office Location</span>
                    <span className="font-semibold text-white">Kottappally, Vatakara, Kozhikode Dt, Kerala</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase block">Phone Numbers</span>
                    <div className="font-semibold text-white flex flex-wrap gap-x-2 gap-y-1">
                      <a href="tel:+919447540811" className="hover:text-[#D4AF37] transition-colors">+91 94475 40811</a>
                      <span className="text-zinc-600">•</span>
                      <a href="tel:+918086872801" className="hover:text-[#D4AF37] transition-colors">80868 72801</a>
                      <span className="text-zinc-600">•</span>
                      <a href="tel:+919072472247" className="hover:text-[#D4AF37] transition-colors">90724 72247</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase block">Email & Website</span>
                    <div className="font-semibold text-white flex flex-col gap-0.5">
                      <a href="mailto:info@graphtech.co.in" className="hover:text-[#D4AF37] transition-colors">info@graphtech.co.in</a>
                      <a href="http://www.graphtech.co.in" target="_blank" rel="noopener noreferrer" className="text-xs text-[#D4AF37] hover:underline font-mono">www.graphtech.co.in</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Mon - Fri: 8:00 AM - 6:00 PM
                </span>
                <span className="flex items-center gap-1 text-[#D4AF37]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Licensed & Insured
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0C0D11] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-16 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-3xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out to <strong className="text-white">Graphtech Engineers</strong>. Our senior engineering director will review your inquiry and contact you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider border border-zinc-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alexander@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Project Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your site location, estimated square footage, timeline, and structural scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
