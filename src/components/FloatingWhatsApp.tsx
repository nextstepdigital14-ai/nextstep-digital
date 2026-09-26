import React, { useState } from 'react';
import { MessageSquareCode, X, ArrowRight, Send } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildQuickChatWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: "Need a new website", prompt: "Hello NextStep Digital, I need a new modern website for my business." },
    { label: "Digital marketing enquiry", prompt: "Hello NextStep Digital, I'd like to discuss digital marketing strategies." },
    { label: "AI Video creation", prompt: "Hello NextStep Digital, I am interested in your AI video generation services." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup Drawer */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-brand-navy border border-brand-cyan/30 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl animate-fadeIn text-white">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquareCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  NextStep Digital Support
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online on WhatsApp</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10"
              aria-label="Close chat window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-brand-navy-dark/95 space-y-3">
            <p className="text-xs text-slate-300 leading-relaxed">
              👋 Hi there! Have a project or question? Pick a topic or message us directly on WhatsApp.
            </p>

            {/* Quick Prompt Buttons */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Quick Topics:
              </span>
              {quickPrompts.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsOpen(false);
                    openWhatsApp(buildQuickChatWhatsAppUrl(item.prompt));
                  }}
                  className="w-full text-left text-xs px-3 py-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-300 transition-all flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            {/* Direct Open Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openWhatsApp(buildQuickChatWhatsAppUrl());
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open WhatsApp ({SITE_CONFIG.contacts.primaryPhone})</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-950/40 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        <MessageSquareCode className="w-6 h-6 text-white" />
        <span className="text-xs font-bold hidden sm:inline-block tracking-wide">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
};
