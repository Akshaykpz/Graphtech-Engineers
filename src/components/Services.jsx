import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Compass, Ruler, Home, Building, ShieldCheck, Hammer, ArrowRight, X, Check } from 'lucide-react';

const Services = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState(null);

  // Lock body scroll when service modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  const services = [
    {
      number: '01',
      title: 'Architectural Design',
      shortDesc: 'Conceptual master planning, 3D BIM visualization, facade engineering, and sustainable space design.',
      fullDesc: 'Graphtech Engineers combines aesthetic elegance with spatial functionality. Our architectural team creates comprehensive blueprint master plans, parametric facade designs, and high-fidelity 3D walkthrough renderings that bring your vision to life prior to groundbreaking.',
      icon: Compass,
      features: [
        '3D BIM & VR Walkthrough Renders',
        'Parametric & Sustainable Facade Design',
        'Zoning & Municipal Approval Plans',
        'Ergonomic Interior Spatial Planning',
      ],
      tag: 'ARCHITECTURE',
    },
    {
      number: '02',
      title: 'Structural Engineering',
      shortDesc: 'Precision structural calculation, foundation engineering, seismic resistance, and steel/concrete analysis.',
      fullDesc: 'Structural reliability is the core of Graphtech Engineers. We utilize advanced finite element structural modeling and non-linear stress analysis to engineer resilient foundations, heavy load-bearing frames, and earthquake-resistant structures.',
      icon: Ruler,
      features: [
        'Finite Element Analysis (FEA)',
        'Seismic & Lateral Load Engineering',
        'Deep Foundation & Retaining Systems',
        'Steel & Reinforced Concrete Optimization',
      ],
      tag: 'ENGINEERING',
    },
    {
      number: '03',
      title: 'Residential Construction',
      shortDesc: 'Turnkey luxury villas, high-end private residences, and multi-family residential estates.',
      fullDesc: 'From bespoke architectural villas to multi-story luxury apartments, Graphtech Engineers constructs custom residential sanctuaries crafted with premium materials, acoustic isolation, and smart home automation systems.',
      icon: Home,
      features: [
        'Bespoke Luxury Villa Construction',
        'Multi-Family Housing Complexes',
        'High-End Architectural Finishes',
        'Energy-Efficient Smart Homes',
      ],
      tag: 'RESIDENTIAL',
    },
    {
      number: '04',
      title: 'Commercial Construction',
      shortDesc: 'Corporate office towers, retail complexes, tech campuses, and industrial logistics facilities.',
      fullDesc: 'Graphtech Engineers delivers high-performance commercial real estate built for efficiency, sustainability, and longevity. We manage everything from foundation pour to complex HVAC installation and commercial interior fit-outs.',
      icon: Building,
      features: [
        'Multi-Story Corporate Towers',
        'Shopping Malls & Retail Hubs',
        'Industrial Warehouses & Tech Parks',
        'LEED Certified Green Commercial Buildings',
      ],
      tag: 'COMMERCIAL',
    },
    {
      number: '05',
      title: 'Project Management',
      shortDesc: 'Full lifecycle supervision, procurement, quality control, budget optimization, and timeline delivery.',
      fullDesc: 'Our project management directors at Graphtech Engineers oversee every site action. With real-time site tracking, automated inventory control, and stringent safety protocols, we guarantee project completion on schedule and within budget.',
      icon: ShieldCheck,
      features: [
        'Integrated Supply Chain & Procurement',
        'Real-Time Milestone & Budget Tracking',
        'Rigorous Quality Assurance (QA/QC)',
        'Turnkey Handover & Site Supervision',
      ],
      tag: 'MANAGEMENT',
    },
    {
      number: '06',
      title: 'Renovation & Remodeling',
      shortDesc: 'Structural retrofitting, historic restoration, spatial re-engineering, and modern interior upgrades.',
      fullDesc: 'Breathe new life into existing structures with Graphtech Engineers. We specialize in structural reinforcement, carbon fiber retrofitting, interior re-planning, and complete adaptive reuse for legacy commercial and residential buildings.',
      icon: Hammer,
      features: [
        'Structural Retrofitting & Carbon Reinforcement',
        'Adaptive Reuse & Commercial Remodeling',
        'Historic Facade Preservation',
        'Complete High-End Interior Overhauls',
      ],
      tag: 'REMODELING',
    },
  ];

  return (
    <section id="services" className="relative py-8 sm:py-20 md:py-28 bg-[#070709] border-t border-white/5 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <span>Core Capabilities</span>
            </div>
            
            <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              COMPREHENSIVE <br className="hidden sm:inline" />
              <span className="text-gold-gradient">ENGINEERING SERVICES</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm max-w-md">
            From initial sketch to final structural sign-off, <strong className="text-white">Graphtech Engineers</strong> delivers end-to-end expertise across six core discipline pillars.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative p-8 rounded-2xl bg-[#0C0D11] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[#D4AF37]/15"
              >
                {/* Number Badge Watermark */}
                <div className="absolute top-4 right-6 font-display text-6xl font-black text-white/5 group-hover:text-[#D4AF37]/10 transition-colors pointer-events-none">
                  {service.number}
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      {service.number} — {service.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-8 mt-8 border-t border-zinc-900 flex items-center justify-between relative z-10">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Drawer for Service Details via Portal */}
      {selectedService && createPortal(
        <div className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-[#0C0D11] border border-[#D4AF37]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl space-y-5 sm:space-y-6 max-h-[88vh] sm:max-h-[90vh] overflow-y-auto my-auto"
            style={{ backgroundColor: '#0C0D11' }}
          >
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                SERVICE {selectedService.number}
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                Graphtech Engineers
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {selectedService.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 pt-2 border-t border-zinc-800">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">
                Key Deliverables & Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white text-xs font-semibold uppercase tracking-wider text-center"
              >
                Close
              </button>
              
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenQuote();
                }}
                className="w-full sm:w-auto justify-center px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#C5A059] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
};

export default Services;
