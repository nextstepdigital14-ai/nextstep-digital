import React from 'react';
import { Code2, Megaphone, Palette, Video, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildServiceWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-brand-blue" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-indigo-500" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-cyan-500" />;
      case 'Video':
        return <Video className="w-6 h-6 text-purple-500" />;
      default:
        return <Code2 className="w-6 h-6 text-brand-blue" />;
    }
  };

  const getPillTheme = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'Megaphone':
        return 'bg-indigo-500/10 text-indigo-700 border-indigo-200';
      case 'Palette':
        return 'bg-cyan-500/10 text-cyan-800 border-cyan-200';
      case 'Video':
        return 'bg-purple-500/10 text-purple-700 border-purple-200';
      default:
        return 'bg-blue-500/10 text-blue-700 border-blue-200';
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Digital Solutions.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Real Impact.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Everything your business needs to establish, grow, and succeed in the digital world.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top / Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  
                  {/* Service Badge / Motto */}
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${getPillTheme(
                      service.iconName
                    )}`}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy mb-3 tracking-tight group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sub-Offerings List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Offerings:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-bold hover:bg-brand-blue transition-colors group-hover:shadow-md"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => openWhatsApp(buildServiceWhatsAppUrl(service.title))}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-semibold hover:bg-emerald-100 transition-colors"
                  title={`Enquire on WhatsApp about ${service.title}`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="sm:hidden lg:inline">WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
