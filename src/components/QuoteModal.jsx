import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calculator, ArrowRight, CheckCircle2, Building2, Sliders, ShieldCheck } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('Commercial Construction');
  const [sqft, setSqft] = useState(25000);
  const [timeline, setTimeline] = useState('Standard (12-18 Months)');
  const [selectedServices, setSelectedServices] = useState(['Architectural Design', 'Structural Engineering']);
  const [submitted, setSubmitted] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  if (!isOpen) return null;

  // Calculate dynamic estimated range based on options
  const calculateEstimate = () => {
    let baseRatePerSqft = 120; // default for commercial
    if (projectType === 'Residential Construction') baseRatePerSqft = 180;
    if (projectType === 'Architectural Design') baseRatePerSqft = 25;
    if (projectType === 'Structural Engineering') baseRatePerSqft = 35;
    if (projectType === 'Renovation & Remodeling') baseRatePerSqft = 85;

    const baseCost = sqft * baseRatePerSqft;
    const low = Math.round(baseCost * 0.9);
    const high = Math.round(baseCost * 1.15);

    const formatCurrency = (val) => {
      if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
      return `$${(val / 1000).toFixed(0)}K`;
    };

    return { low: formatCurrency(low), high: formatCurrency(high) };
  };

  const estimate = calculateEstimate();

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#FFFFFF', '#C5A059'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0C0D11] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </div>

          <h3 className="font-display text-3xl font-extrabold text-white">
            Get a Custom Quote from <span className="text-gold-gradient">Graphtech Engineers</span>
          </h3>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="font-display text-2xl font-bold text-white">Estimate Request Submitted!</h4>
              <p className="text-sm text-zinc-400 max-w-md mx-auto">
                Thank you, <strong className="text-white">{contactInfo.name}</strong>. Estimated budget range: <strong className="text-[#D4AF37]">{estimate.low} — {estimate.high}</strong>. A Graphtech Engineers principal engineer will contact you shortly.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* Step Progress Pills */}
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <button
                onClick={() => setStep(1)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  step === 1 ? 'bg-[#D4AF37] text-black' : 'bg-zinc-900 text-zinc-400'
                }`}
              >
                1. Scope & Specs
              </button>
              <button
                onClick={() => setStep(2)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  step === 2 ? 'bg-[#D4AF37] text-black' : 'bg-zinc-900 text-zinc-400'
                }`}
              >
                2. Contact & Submit
              </button>
            </div>

            {step === 1 ? (
              <div className="space-y-6">
                
                {/* Project Type */}
                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Project Classification
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      'Commercial Construction',
                      'Residential Construction',
                      'Architectural Design',
                      'Structural Engineering',
                      'Renovation & Remodeling',
                      'Project Management',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all text-left ${
                          projectType === type
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sqft Slider */}
                <div className="space-y-3 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-300">Estimated Total Floor Area</span>
                    <span className="font-mono font-bold text-[#D4AF37] text-sm">
                      {sqft.toLocaleString()} sq. ft.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="200000"
                    step="1000"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                    <span>1,000 sq. ft.</span>
                    <span>100,000 sq. ft.</span>
                    <span>200,000+ sq. ft.</span>
                  </div>
                </div>

                {/* Dynamic Calculated Budget Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#14151B] to-[#0C0D11] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-widest block font-mono">ESTIMATED BUDGET RANGE</span>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-gold-gradient">
                      {estimate.low} — {estimate.high}
                    </span>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#C5A059] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md shadow-[#D4AF37]/20"
                  >
                    <span>Next: Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Target Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                    >
                      <option>Urgent (&lt; 6 Months)</option>
                      <option>Standard (12-18 Months)</option>
                      <option>Long-term Planning (18+ Months)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Additional Site Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Location, soil constraints, architectural style preferences..."
                    value={contactInfo.notes}
                    onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#D4AF37] text-sm resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white text-xs font-semibold uppercase"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2"
                  >
                    <span>Submit Quote Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default QuoteModal;
