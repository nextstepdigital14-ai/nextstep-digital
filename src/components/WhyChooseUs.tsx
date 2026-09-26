import React from 'react';
import { Lightbulb, TrendingUp, ShieldCheck, UserCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      title: "Creative Solutions",
      desc: "We approach every project with fresh ideas and thoughtful execution, ensuring your brand stands out in saturated digital spaces.",
      icon: <Lightbulb className="w-6 h-6 text-brand-cyan" />,
      accent: "from-cyan-500/20 to-blue-500/10",
    },
    {
      title: "Result-Driven Strategies",
      desc: "We focus on solutions that support real business objectives — whether converting leads, generating buzz, or scaling your online storefront.",
      icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
      accent: "from-blue-500/20 to-indigo-500/10",
    },
    {
      title: "Reliable Support",
      desc: "We communicate clearly and work closely with clients throughout the project lifecycle and beyond, providing trustworthy backing.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      accent: "from-emerald-500/20 to-teal-500/10",
    },
    {
      title: "Client-Centric Approach",
      desc: "Every project starts with deeply understanding your specific vision, constraints, and audience before a single pixel or line of code is written.",
      icon: <UserCheck className="w-6 h-6 text-purple-400" />,
      accent: "from-purple-500/20 to-pink-500/10",
    },
  ];

  return (
    <section className="py-24 bg-brand-navy-dark text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
            Why Partner With Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Your Growth.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-teal-300">
              Our Commitment.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            We operate as an extension of your own vision, combining technical excellence with proactive communication.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, index) => (
            <div
              key={diff.title}
              className="relative rounded-2xl bg-white/5 border border-white/10 p-7 hover:border-brand-cyan/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {diff.icon}
                </div>

                <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-widest block mb-1">
                  Pillar 0{index + 1}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {diff.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {diff.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-brand-cyan font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>NextStep Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
