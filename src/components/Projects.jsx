import React, { useState } from 'react';
import { MapPin, Building2, ArrowUpRight, Filter, X, CheckCircle2, Layers } from 'lucide-react';

const Projects = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Apex Horizon Tower',
      location: 'Metro Financial District',
      type: 'Commercial Construction',
      category: 'Commercial',
      image: '/projects/commercial_tower.png',
      description: 'A 48-story state-of-the-art corporate skyscraper engineered by Graphtech Engineers with parametric double-skin glass facade, diagrid structural steel, and LEED Platinum certification.',
      area: '850,000 sq. ft.',
      year: '2025',
      client: 'Apex Global Assets',
      specs: [
        '48 Floors with Diagrid Steel Exoskeleton',
        'LEED Platinum Green Energy System',
        'Advanced Seismic Damping Mechanism',
        'Automated Smart Building Infrastructure',
      ],
    },
    {
      id: 2,
      name: 'The Lumina Sanctuary',
      location: 'Coastal Heights Estate',
      type: 'Residential Construction',
      category: 'Residential',
      image: '/projects/residential_estate.png',
      description: 'A luxury architectural villa featuring post-tensioned cantilevered slabs, seamless glass curtains, an integrated infinity pool, and acoustic environmental isolation.',
      area: '14,500 sq. ft.',
      year: '2024',
      client: 'Private Estate Owner',
      specs: [
        'Post-Tensioned 18-meter Cantilever',
        'Floor-to-Ceiling Structural Glass Walls',
        'Sub-Grade Geothermal Heating & Cooling',
        'Custom Pre-Cast Concrete Facade Panels',
      ],
    },
    {
      id: 3,
      name: 'Aura Performing Arts Pavilion',
      location: 'Downtown Cultural Hub',
      type: 'Architectural Design & Engineering',
      category: 'Cultural',
      image: '/projects/cultural_center.png',
      description: 'An iconic civic landmark showcasing curved glulam timber arches and tensioned glass roofs, engineered for optimal acoustic reflection and structural grace.',
      area: '120,000 sq. ft.',
      year: '2025',
      client: 'Municipal Development Board',
      specs: [
        'Complex Parametric Timber Structural Roof',
        'Acoustically Tuned Concert Hall Geometry',
        'Solar Roof Integrated Photovoltaic Canopy',
        '1,800 Auditorium Capacity',
      ],
    },
    {
      id: 4,
      name: 'Vanguard Structural Logistics Complex',
      location: 'Industrial Freight Corridor',
      type: 'Industrial Engineering',
      category: 'Industrial',
      image: '/frames/frame-0001.jpg',
      description: 'A high-load industrial logistics center with pre-stressed long-span concrete trusses, automated crane gantries, and deep pile foundation systems.',
      area: '450,000 sq. ft.',
      year: '2024',
      client: 'Vanguard Global Logistics',
      specs: [
        '45-meter Clear Span Pre-Stressed Concrete',
        'Heavy Crane Heavy Load Floor Capacity',
        'Automated Solar Roof Energy Matrix',
        'High Impact Industrial Hardened Flooring',
      ],
    },
  ];

  const filterCategories = ['All', 'Commercial', 'Residential', 'Cultural', 'Industrial'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 bg-[#070709] border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <span>Portfolio Showcase</span>
            </div>
            
            <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              ARCHITECTURAL & <br className="hidden sm:inline" />
              <span className="text-gold-gradient">ENGINEERING MASTERY</span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === cat
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl bg-[#0C0D11] border border-white/10 overflow-hidden cursor-pointer hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-[#D4AF37]/15 flex flex-col"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-80 w-full overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D11] via-transparent to-black/30" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{project.type}</span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {project.name}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Specs Footer */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>AREA: {project.area}</span>
                  <span>DELIVERED: {project.year}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#0C0D11] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl space-y-0 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-zinc-300 hover:text-white border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Image */}
            <div className="relative h-96 w-full bg-zinc-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D11] via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                  {selectedProject.type}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  {selectedProject.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 sm:p-10 space-y-8">
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs">
                <div>
                  <span className="text-zinc-500 uppercase tracking-widest block font-mono">Location</span>
                  <span className="text-white font-semibold">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-widest block font-mono">Total Floor Area</span>
                  <span className="text-white font-semibold">{selectedProject.area}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-widest block font-mono">Completion Year</span>
                  <span className="text-white font-semibold">{selectedProject.year}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase tracking-widest block font-mono">Client</span>
                  <span className="text-white font-semibold">{selectedProject.client}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-lg font-bold text-white">Project Overview</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.description} Designed and engineered by <strong className="text-white">Graphtech Engineers</strong>, this landmark project stands as an exemplar of structural resilience and contemporary architectural elegance.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-[#D4AF37]">Key Engineering Innovations</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="text-xs text-zinc-300 font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">
                  Graphtech Engineers • Certified Architectural Portfolio
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuote();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#C5A059] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <span>Build Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
