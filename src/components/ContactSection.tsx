import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquareCode, Send, CheckCircle2, AlertCircle, Sparkles, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { EnquiryFormData } from '../types';
import { buildEnquiryWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: SITE_CONFIG.services[0].title,
    budget: SITE_CONFIG.budgetRanges[1],
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedService) {
      // Find matching service or default
      const matched = SITE_CONFIG.services.find(
        (s) => s.title.toLowerCase().includes(preselectedService.toLowerCase()) ||
               preselectedService.toLowerCase().includes(s.title.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched.title }));
      }
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp or phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief summary of your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Project details must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Build the WhatsApp URL
    const waUrl = buildEnquiryWhatsAppUrl(formData);

    // Open WhatsApp
    openWhatsApp(waUrl);

    // Show clear success/next step instructions modal
    setShowSuccessModal(true);
  };

  return (
    <section id="contact" className="py-24 bg-brand-navy-dark text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
            Start A Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-teal-300">
              Great Together.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Have an idea, a business, or a project in mind? Tell us what you need. Let's make it happen.
          </p>
        </div>

        {/* Content Grid: Left Contact Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Business Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Communication Channels
              </h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                We believe in prompt, reliable communication. Reach out to our founders and leads directly via WhatsApp or phone.
              </p>

              <div className="space-y-6">
                
                {/* Primary WhatsApp Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <MessageSquareCode className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      WhatsApp Business (Primary)
                    </span>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contacts.primaryPhoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      {SITE_CONFIG.contacts.primaryPhone}
                    </a>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">
                      Fastest response on WhatsApp
                    </span>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-brand-cyan border border-blue-500/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Secondary Contact Phone
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.contacts.secondaryPhone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                    >
                      {SITE_CONFIG.contacts.secondaryPhone}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.contacts.email}`}
                      className="text-base font-bold text-white hover:text-brand-cyan transition-colors break-all"
                    >
                      {SITE_CONFIG.contacts.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* Tagline reminder */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>{SITE_CONFIG.name}</span>
                <span className="text-brand-cyan italic">"{SITE_CONFIG.tagline}"</span>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-600/30 to-teal-600/30 border border-emerald-500/40 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Prefer a Direct Chat?
                </h4>
              </div>
              <p className="text-xs text-slate-200 mb-4 leading-relaxed">
                Skip the form and chat with our team right now on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${SITE_CONFIG.contacts.primaryPhoneRaw}?text=${encodeURIComponent(
                  "Hello NextStep Digital! I'd like to quickly chat about a project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-md"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Right Column: Full Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white/5 border border-white/15 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Project Enquiry Form
                </h3>
                <p className="text-slate-300 text-sm">
                  Complete this form to generate a structured enquiry directly in WhatsApp with our team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Column: Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Manish Surve"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-navy/60 border ${
                        errors.fullName ? 'border-rose-500' : 'border-white/15 focus:border-brand-cyan'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Business / Company Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. NextStep Solutions"
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-white/15 focus:border-brand-cyan text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2-Column: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. you@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-navy/60 border ${
                        errors.email ? 'border-rose-500' : 'border-white/15 focus:border-brand-cyan'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      WhatsApp / Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98341 29379"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-navy/60 border ${
                        errors.phone ? 'border-rose-500' : 'border-white/15 focus:border-brand-cyan'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* 2-Column: Service Required & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Service Required <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-white/15 focus:border-brand-cyan text-white text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      {SITE_CONFIG.services.map((svc) => (
                        <option key={svc.id} value={svc.title} className="bg-brand-navy text-white">
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Estimated Budget <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy/60 border border-white/15 focus:border-brand-cyan text-white text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      {SITE_CONFIG.budgetRanges.map((budget) => (
                        <option key={budget} value={budget} className="bg-brand-navy text-white">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Project Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Details / Goals <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, deliverables, or any questions you have for NextStep Digital..."
                    className={`w-full px-4 py-3 rounded-xl bg-brand-navy/60 border ${
                      errors.message ? 'border-rose-500' : 'border-white/15 focus:border-brand-cyan'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageSquareCode className="w-5 h-5 text-white" />
                  <span>Send Enquiry on WhatsApp</span>
                  <Send className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-xs text-slate-400">
                  Clicking will open WhatsApp with your project message formatted and ready to send.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Confirmation / Instruction Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-brand-navy rounded-2xl max-w-md w-full p-6 sm:p-8 border border-brand-cyan/40 shadow-2xl relative text-center">
            
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              WhatsApp Link Prepared!
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Your enquiry has been formatted and opened in WhatsApp.
            </p>

            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-200 text-xs text-left mb-6 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-emerald-300 mb-1">
                <Sparkles className="w-4 h-4" /> Next Step:
              </div>
              <p>
                <strong>Please press "Send" in WhatsApp</strong> to transmit your enquiry to NextStep Digital (+91 98341 29379). Our team will review your requirements and respond promptly!
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const waUrl = buildEnquiryWhatsAppUrl(formData);
                  openWhatsApp(waUrl);
                }}
                className="flex-1 py-3 rounded-xl bg-emerald-500 text-white font-bold text-xs sm:text-sm hover:bg-emerald-600 transition-colors"
              >
                Reopen WhatsApp
              </button>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="py-3 px-5 rounded-xl bg-white/10 text-slate-200 font-semibold text-xs sm:text-sm hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
