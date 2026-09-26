import React from 'react';
import { Target, Zap, HeartHandshake, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-navy-dark text-white relative overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Story on left, Philosophy card & Values on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-4">
              About NextStep Digital
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              We Don't Just Build Digital Products.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-teal-300">
                We Build Possibilities.
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                NextStep Digital was built on a shared vision of creating meaningful digital solutions. What started with months of planning, discussions, and ideas is now becoming a reality.
              </p>
              <p>
                We are a team of six driven individuals bringing together creativity, technology, and business thinking to help businesses take their next step in the digital world.
              </p>
              <p className="text-slate-400">
                Our approach is simple: understand the client's needs, build the right solution, and focus on delivering real value.
              </p>
            </div>

            {/* Quote / Highlight from flyer */}
            <div className="mt-8 p-5 rounded-2xl bg-white/5 border-l-4 border-brand-cyan border-y border-r border-white/10 backdrop-blur-md">
              <p className="text-sm sm:text-base font-semibold text-slate-200 italic">
                “Six members. One vision. A thousand possibilities. The journey begins now.”
              </p>
              <span className="block mt-2 text-xs text-brand-cyan font-bold uppercase tracking-widest">
                — NextStep Digital Founding Team
              </span>
            </div>
          </div>

          {/* Right Column: The Philosophy & 3 Brand Values */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The "LESS TALK. MORE RESULTS." Highlight Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-navy-light/90 to-brand-navy/90 border border-brand-cyan/30 p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-brand-cyan" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  Our Core Philosophy
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                LESS TALK.{' '}
                <span className="text-brand-cyan">MORE RESULTS.</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {SITE_CONFIG.philosophy}
              </p>
            </div>

            {/* 3 Brand Values */}
            <div className="grid grid-cols-1 gap-4">
              
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-500/20 text-brand-blue shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Quality Over Quantity
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We focus on deliberate craftsmanship rather than churning out generic templates. Every deliverable is polished to agency standards.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Results Over Publicity
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We don't chase loud publicity or superficial vanity metrics. We let our tangible results and work speak for themselves.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-brand-cyan/20 text-brand-cyan shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Client Success Is Our Priority
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Your growth is our vision. We build collaborative, transparent, long-term partnerships focused on real business impact.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
