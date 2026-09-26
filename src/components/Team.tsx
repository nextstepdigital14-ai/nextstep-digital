import React from 'react';
import { Crown, Code, Sparkles, TrendingUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Team: React.FC = () => {
  const getBadgeIcon = (category: string) => {
    switch (category) {
      case 'leadership':
        return <Crown className="w-4 h-4 text-amber-500" />;
      case 'tech':
        return <Code className="w-4 h-4 text-brand-blue" />;
      case 'content':
        return <Sparkles className="w-4 h-4 text-brand-cyan" />;
      case 'marketing':
        return <TrendingUp className="w-4 h-4 text-pink-500" />;
      default:
        return <Code className="w-4 h-4 text-brand-blue" />;
    }
  };

  const getCardTheme = (category: string) => {
    switch (category) {
      case 'leadership':
        return {
          gradient: 'from-blue-600 to-indigo-800',
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          ring: 'group-hover:border-blue-500/50',
        };
      case 'tech':
        return {
          gradient: 'from-indigo-600 to-purple-700',
          badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          ring: 'group-hover:border-indigo-500/50',
        };
      case 'content':
        return {
          gradient: 'from-cyan-600 to-teal-700',
          badge: 'bg-cyan-50 text-cyan-800 border-cyan-200',
          ring: 'group-hover:border-cyan-500/50',
        };
      case 'marketing':
        return {
          gradient: 'from-pink-600 to-rose-700',
          badge: 'bg-pink-50 text-pink-700 border-pink-200',
          ring: 'group-hover:border-pink-500/50',
        };
      default:
        return {
          gradient: 'from-slate-600 to-slate-800',
          badge: 'bg-slate-50 text-slate-700 border-slate-200',
          ring: 'group-hover:border-slate-500/50',
        };
    }
  };

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
            Our Core Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Six Minds. One Vision.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              One NextStep.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Meet the dedicated minds bringing together technology, creative storytelling, and growth strategies.
          </p>
        </div>

        {/* 6 Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.team.map((member) => {
            const theme = getCardTheme(member.category);

            return (
              <div
                key={member.id}
                className={`group relative bg-brand-light/60 rounded-2xl border border-slate-200/80 p-7 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center ${theme.ring}`}
              >
                {/* Avatar Placeholder with Initials & Category Gradient */}
                <div className="relative mb-5">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-black/10 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <span>{member.initials}</span>
                  </div>

                  {/* Micro badge icon on avatar */}
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-white shadow-md border border-slate-100">
                    {getBadgeIcon(member.category)}
                  </div>
                </div>

                {/* Member Name */}
                <h3 className="text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                  {member.name}
                </h3>

                {/* Member Role Pill */}
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${theme.badge}`}
                >
                  {member.role}
                </span>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  {member.description}
                </p>

                {/* Team Spirit Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <span>NextStep Digital Member</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
