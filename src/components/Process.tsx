import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Search, Compass, Code2, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const stepIcons = [
    <Search className="w-5 h-5 text-brand-blue" />,
    <Compass className="w-5 h-5 text-indigo-500" />,
    <Code2 className="w-5 h-5 text-cyan-500" />,
    <Rocket className="w-5 h-5 text-emerald-500" />,
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
            Our Proven Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            From First Idea to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Final Launch.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A transparent four-stage process engineered for consistency, speed, and real business results.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-emerald-400 z-0 opacity-40" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {SITE_CONFIG.processSteps.map((step, index) => (
              <div
                key={step.number}
                className="bg-brand-light rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
              >
                <div>
                  {/* Step Number + Icon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-brand-navy/20 group-hover:text-brand-blue transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/70 flex items-center justify-center">
                      {stepIcons[index]}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-2 tracking-tight group-hover:text-brand-blue transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-brand-blue">
                  <span>Phase {index + 1} of 4</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
