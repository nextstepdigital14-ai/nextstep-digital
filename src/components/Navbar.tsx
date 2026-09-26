import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { buildQuickChatWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-navy-dark/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-cyan-500/15 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center focus:outline-none"
            aria-label="NextStep Digital Home"
          >
            <Logo variant="light" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-slate-200 hover:text-brand-cyan transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => openWhatsApp(buildQuickChatWhatsAppUrl())}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-2 rounded-full border border-emerald-500/20 transition-all"
              title="Quick WhatsApp Chat"
            >
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
                if (onOpenContact) onOpenContact();
              }}
              className="group relative inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-brand-navy-dark/95 backdrop-blur-2xl border-b border-brand-cyan/20 px-6 py-6 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-slate-200 hover:text-brand-cyan hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp(buildQuickChatWhatsAppUrl());
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold text-sm"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-sm shadow-md"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
