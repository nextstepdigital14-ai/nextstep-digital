import React from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../config/siteConfig';
import { Mail, Phone, MessageSquareCode, ArrowUp, ArrowUpRight } from 'lucide-react';
import { buildQuickChatWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-navy-dark text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Decorative top gradient accent */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-blue via-brand-cyan to-emerald-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed pt-2">
              "{SITE_CONFIG.tagline}" — Delivering quality digital craftsmanship, modern engineering, and results that speak for themselves.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-pink-500/20 hover:text-pink-400 border border-white/10 flex items-center justify-center transition-all"
                title="Follow us on Instagram"
                aria-label="Instagram profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <button
                onClick={() => openWhatsApp(buildQuickChatWhatsAppUrl())}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center transition-all"
                title="Chat with us on WhatsApp"
                aria-label="WhatsApp chat"
              >
                <MessageSquareCode className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${SITE_CONFIG.contacts.primaryPhoneRaw}`} className="hover:text-white transition-colors">
                    {SITE_CONFIG.contacts.primaryPhone}
                  </a>
                  <a href={`tel:${SITE_CONFIG.contacts.secondaryPhoneRaw}`} className="text-xs text-slate-400 hover:text-white transition-colors">
                    {SITE_CONFIG.contacts.secondaryPhone}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contacts.email}`}
                  className="hover:text-white transition-colors break-all text-xs"
                >
                  {SITE_CONFIG.contacts.email}
                </a>
              </li>

              <li className="pt-2">
                <button
                  onClick={() => openWhatsApp(buildQuickChatWhatsAppUrl())}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 NextStep Digital. All rights reserved.
          </div>

          <div className="text-center font-medium text-brand-cyan">
            “Your next step starts here.”
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
