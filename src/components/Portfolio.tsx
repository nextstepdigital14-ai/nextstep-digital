import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ArrowRight, Eye, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { PortfolioProject } from '../types';
import { buildServiceWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface PortfolioProps {
  onEnquireProject: (serviceName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onEnquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Websites', 'Digital Campaigns', 'Creative Content', 'AI Videos'];

  const filteredProjects = activeCategory === 'All'
    ? SITE_CONFIG.portfolio
    : SITE_CONFIG.portfolio.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            Our Work & Concepts
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Ideas Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Reality.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Take a look at sample design systems, digital concepts, and media projects we produce for our clients.
          </p>

          {/* Transparent Startup Notice */}
          <div className="mt-3 inline-block bg-slate-200/60 text-slate-600 text-xs px-3.5 py-1 rounded-full border border-slate-300/60">
            Showcasing agency prototype concepts & framework samples ready for client customization
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-brand-navy hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Thumbnail Banner */}
              <div
                className="relative h-48 w-full p-6 flex flex-col justify-between text-white overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ background: project.imagePlaceholder }}
              >
                {/* Overlay pattern */}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Category Pill */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md text-white border border-white/20">
                    {project.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-colors"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Title inside header */}
                <div className="relative z-10">
                  <span className="text-[11px] text-cyan-200 font-mono tracking-wide">
                    NextStep Digital Concept
                  </span>
                  <h3 className="text-xl font-bold text-white drop-shadow-sm leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors flex items-center gap-1"
                  >
                    <span>View Scope</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      onEnquireProject(project.category);
                    }}
                    className="text-xs font-semibold text-slate-700 hover:text-brand-navy bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Discuss Similar</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1 block">
              {selectedProject.category}
            </span>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Included Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  const service = selectedProject.category;
                  setSelectedProject(null);
                  onEnquireProject(service);
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs sm:text-sm font-bold shadow-md hover:opacity-90"
              >
                Enquire for Your Project
              </button>
              <button
                onClick={() => openWhatsApp(buildServiceWhatsAppUrl(selectedProject.title))}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-semibold hover:bg-emerald-100"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
