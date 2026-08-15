import React, { useState } from 'react';
import { MessageSquare, Compass, PenTool, Ruler, HardHat, CheckCircle2, ChevronRight } from 'lucide-react';

const Process = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      number: '01',
      title: 'Consultation',
      subtitle: 'Client Alignment & Site Feasibility',
      icon: MessageSquare,
      description: 'Initial site assessment, client vision discovery, zoning constraints analysis, and preliminary budgetary alignment conducted by Graphtech Engineers directors.',
      deliverables: ['Site Feasibility Report', 'Topographical Analysis', 'Initial Concept Outline', 'Budget Range Estimate'],
    },
    {
      number: '02',
      title: 'Planning',
      subtitle: 'Master Schematics & Land Use Strategy',
      icon: Compass,
      description: 'Detailed zoning compliance, environmental impact studies, utility grid integration, and master project scheduling.',
      deliverables: ['Master Project Schedule', 'Zoning Approval Documents', 'Environmental Clearance', 'Risk Mitigation Framework'],
    },
    {
      number: '03',
      title: 'Design',
      subtitle: 'Architectural Renders & Spatial BIM',
      icon: PenTool,
      description: 'Creation of 3D BIM walkthrough models, floor plan ergonomics, exterior facade concepts, and material aesthetic selections.',
      deliverables: ['3D BIM Building Models', 'High-Res Photorealistic Renders', 'Material Sample Specifications', 'Interior Spatial Ergonomics'],
    },
    {
      number: '04',
      title: 'Engineering',
      subtitle: 'Structural Computations & Safety Audits',
      icon: Ruler,
      description: 'Rigorous structural calculation, finite element stress analysis, MEP (Mechanical, Electrical, Plumbing) layout engineering, and municipal permit submittals.',
      deliverables: ['Stamped Structural Calculations', 'MEP Schematic Drawings', 'Seismic Damping Specifications', 'Municipal Building Permit'],
    },
    {
      number: '05',
      title: 'Construction',
      subtitle: 'Precision Fabrication & Groundbreaking',
      icon: HardHat,
      description: 'Site excavation, deep foundation pouring, structural steel frame erection, and real-time site supervision under Graphtech Engineers QA protocols.',
      deliverables: ['Foundation Load Test Reports', 'Structural Steel Framing Handover', 'Daily Site Supervision Logs', 'Zero-Harm Safety Compliance'],
    },
    {
      number: '06',
      title: 'Completion',
      subtitle: 'Final QA/QC & Key Handover',
      icon: CheckCircle2,
      description: 'Comprehensive commissioning, structural acoustic and environmental testing, final client walk-through, and turnkey project handover.',
      deliverables: ['As-Built BIM Documentation', 'Occupancy Certificate', 'System Warranties & Manuals', 'Key Handover & Facility Sign-Off'],
    },
  ];

  return (
    <section id="process" className="relative py-28 bg-[#070709] border-t border-white/5 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <span>Execution Methodology</span>
          </div>
          
          <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
            THE CONSTRUCTION <br className="hidden sm:inline" />
            <span className="text-gold-gradient">PROCESS TIMELINE</span>
          </h2>

          <p className="text-zinc-400 text-sm">
            <strong className="text-white">Graphtech Engineers</strong> follows a disciplined 6-stage architectural and construction lifecycle ensuring absolute precision at every phase.
          </p>
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-36 ${
                  isActive
                    ? 'bg-gradient-to-br from-[#14151B] to-[#0C0D11] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/15 scale-[1.02]'
                    : 'bg-[#0C0D11] border-white/10 hover:border-zinc-700 text-zinc-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#D4AF37]' : 'text-zinc-500'}`}>
                    STAGE {stage.number}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#D4AF37]' : 'text-zinc-500'}`} />
                </div>

                <div className="space-y-1">
                  <h3 className={`font-display text-base font-bold ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {stage.title}
                  </h3>
                  <span className="text-[10px] text-zinc-500 line-clamp-1 block">
                    {stage.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0C0D11] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="font-display text-4xl font-black text-gold-gradient">
                {stages[activeStage].number}
              </span>
              <div className="h-8 w-px bg-zinc-800" />
              <div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest block">CURRENT PHASE</span>
                <span className="text-sm font-bold text-white uppercase tracking-wider">{stages[activeStage].subtitle}</span>
              </div>
            </div>

            <h3 className="font-display text-3xl font-bold text-white">
              {stages[activeStage].title} Stage Overview
            </h3>

            <p className="text-zinc-300 text-sm leading-relaxed">
              {stages[activeStage].description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 hover:text-white"
              >
                ← Previous Stage
              </button>
              
              <button
                onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 rounded-xl bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-[#C5A059]"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Deliverables List */}
          <div className="lg:col-span-5 bg-zinc-900/80 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">
              Key Stage Deliverables
            </h4>

            <div className="space-y-3">
              {stages[activeStage].deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#0C0D11] border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="text-xs font-medium text-zinc-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-zinc-500 font-mono text-center">
              Graphtech Engineers Quality Gate Certified
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
