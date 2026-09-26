import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Smartphone, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center overflow-hidden bg-brand-navy-dark text-white"
    >
      {/* Background Lighting Mesh & Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-brand-cyan/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-brand-navy-light/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Startup Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-brand-cyan/30 backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                {SITE_CONFIG.brandStatement}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              We Build Digital Experiences That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-teal-300">
                Drive Growth.
              </span>
            </h1>

            {/* Supporting Pitch */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              From powerful websites to creative content and AI-powered solutions, we help businesses turn ideas into meaningful digital growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-95 shadow-lg shadow-brand-blue/25 hover:shadow-cyan-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-brand-cyan/40"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Indicator Line */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                Creative Solutions
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                Result-Driven Strategies
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                Reliable Support
              </span>
            </div>

          </div>

          {/* Right Column: Premium Digital Device & 3D Tech Visual Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-brand-cyan/20 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Device Composite Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Laptop Glass Card */}
              <div className="rounded-2xl border border-white/20 bg-slate-900/80 backdrop-blur-xl p-4 shadow-2xl shadow-black/60 transition-transform duration-500 hover:scale-[1.01]">
                
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono">
                    nextstepdigital.in
                  </div>
                  <div className="w-4" />
                </div>

                {/* Simulated Screen Interface */}
                <div className="space-y-3 p-1">
                  
                  {/* Hero banner inside simulated site */}
                  <div className="rounded-lg bg-gradient-to-r from-brand-navy to-brand-navy-light p-4 border border-brand-cyan/20 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-brand-cyan/20 rounded-full blur-xl" />
                    <span className="inline-block text-[10px] font-bold text-brand-cyan uppercase tracking-wider mb-1">
                      Build Your Online Presence
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                      Modern Websites, Better Business
                    </h4>
                    <div className="inline-flex items-center gap-1 text-[9px] bg-brand-cyan text-brand-navy font-bold px-2.5 py-1 rounded">
                      <span>Get Started</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* 2-Column Mini Dashboard Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2.5">
                      <div className="p-2 rounded-md bg-brand-blue/20 text-brand-cyan">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Digital Reach</div>
                        <div className="text-xs font-bold text-white">Targeted Growth</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2.5">
                      <div className="p-2 rounded-md bg-purple-500/20 text-purple-300">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Creative Tech</div>
                        <div className="text-xs font-bold text-white">AI Video Engine</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating Mobile Phone Preview Card (Overlapping bottom right) */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 w-44 rounded-xl border border-white/20 bg-slate-950/90 backdrop-blur-2xl p-3 shadow-2xl shadow-cyan-950/50 hidden sm:block animate-float">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-brand-cyan" />
                    <span className="text-[10px] font-bold text-white">Grow Your Brand</span>
                  </div>
                  <span className="text-[9px] font-medium text-emerald-400 font-mono">LIVE</span>
                </div>
                
                {/* Mini Graph Bar Visual */}
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-cyan rounded-full w-4/5" />
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full w-3/5" />
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-300">
                  <span>Engagement</span>
                  <span className="text-brand-cyan font-bold">+100% Focused</span>
                </div>
              </div>

              {/* Floating Badge (Top Left) */}
              <div className="absolute -top-5 -left-3 sm:-left-6 px-3.5 py-2 rounded-xl bg-brand-navy-dark/90 border border-brand-cyan/30 backdrop-blur-xl shadow-xl flex items-center gap-2 hidden sm:flex">
                <div className="p-1 rounded-md bg-brand-cyan/20 text-brand-cyan">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white">Digital Solutions</div>
                  <div className="text-[9px] text-brand-cyan">For a Brighter Tomorrow</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <a href="#services" aria-label="Scroll to services" className="flex flex-col items-center">
          <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4 text-brand-cyan animate-bounce" />
        </a>
      </div>
    </section>
  );
};
