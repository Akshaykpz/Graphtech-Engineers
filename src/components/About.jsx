import React from 'react';
import { Compass, ShieldCheck, Ruler, Building2, HardHat, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      title: 'Engineering Expertise',
      description: 'Advanced structural computations, finite element modeling, seismic load optimization, and rigorous safety compliance.',
      icon: Ruler,
      tag: 'PRECISION CORE',
    },
    {
      title: 'Architectural Planning',
      description: 'Human-centric spatial ergonomics, sustainable green building design, and futuristic exterior facades.',
      icon: Compass,
      tag: 'SPATIAL ART',
    },
    {
      title: 'Construction Quality',
      description: 'Tier-1 structural concrete, high-grade steel fabrication, and non-destructive quality testing at every milestone.',
      icon: Building2,
      tag: 'BUILT TO LAST',
    },
    {
      title: 'Professional Execution',
      description: 'BIM integration, zero-tolerance safety standards, and on-time project execution guaranteed.',
      icon: HardHat,
      tag: 'ZERO DELAY',
    },
    {
      title: 'Project Management',
      description: 'End-to-end transparent budget management, supply chain optimization, and turnkey delivery.',
      icon: ShieldCheck,
      tag: 'TURNKEY MASTER',
    },
  ];

  const stats = [
    { value: '150+', label: 'Landmark Projects' },
    { value: '100%', label: 'Structural Accuracy' },
    { value: '25+', label: 'Industry Awards' },
    { value: '$1.2B+', label: 'Constructed Value' },
  ];

  return (
    <section id="about" className="relative py-8 sm:py-20 md:py-28 bg-[#070709] overflow-hidden">
      
      {/* Background Architectural Grid & Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16 lg:space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <span>Who We Are</span>
            </div>
            
            <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              ENGINEERING WITH <br className="hidden sm:inline" />
              <span className="text-gold-gradient">PURPOSE</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 text-zinc-400 text-base leading-relaxed">
            <p>
              <strong className="text-white font-semibold">Graphtech Engineers</strong> is a premier architectural engineering and construction firm dedicated to transforming complex architectural concepts into structural masterpieces.
            </p>
            <p>
              By unifying visionary architectural planning, cutting-edge structural engineering, and uncompromising construction quality, <strong className="text-white font-semibold">Graphtech Engineers</strong> sets new benchmarks across residential, commercial, and industrial developments.
            </p>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl bg-[#0C0D11] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase px-2.5 py-1 rounded bg-zinc-900/60 border border-zinc-800">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  <span>Graphtech Engineers Standard</span>
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
            );
          })}

          {/* Special Philosophy Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#14151B] to-[#0C0D11] border border-[#D4AF37]/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:bg-[#D4AF37]/20 transition-all" />
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                OUR PROMISE
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Uncompromising Quality. Reliable Delivery.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                At <strong className="text-white">Graphtech Engineers</strong>, every structural beam, architectural elevation, and project timeline is executed with disciplined precision.
              </p>
            </div>
            <div className="pt-6 relative z-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0C0D11] border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-zinc-800">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 p-2">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-gold-gradient">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
