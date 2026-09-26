import React from 'react';
import { Lightbulb, TrendingUp, ShieldCheck, Users } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const TrustBar: React.FC = () => {
  const icons = [
    <Lightbulb className="w-5 h-5 text-brand-cyan" />,
    <TrendingUp className="w-5 h-5 text-brand-cyan" />,
    <ShieldCheck className="w-5 h-5 text-brand-cyan" />,
    <Users className="w-5 h-5 text-brand-cyan" />,
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-navy-light/90 border border-brand-cyan/25 rounded-2xl shadow-2xl backdrop-blur-xl p-5 md:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {SITE_CONFIG.trustIndicators.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start space-x-4 ${index > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
            >
              <div className="p-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 shrink-0">
                {icons[index]}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-tight mb-0.5">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
