import { SITE_CONFIG } from '../config/siteConfig';
import type { EnquiryFormData } from '../types';

/**
 * Builds the official click-to-chat WhatsApp link for full enquiry form submissions.
 */
export function buildEnquiryWhatsAppUrl(data: EnquiryFormData): string {
  const phone = SITE_CONFIG.contacts.primaryPhoneRaw;
  const company = data.companyName.trim() ? data.companyName.trim() : 'Independent / Not specified';
  const budget = data.budget.trim() ? data.budget : 'To be discussed';

  const message = [
    `Hello NextStep Digital!`,
    ``,
    `I would like to enquire about your services.`,
    ``,
    `• Name: ${data.fullName.trim()}`,
    `• Company: ${company}`,
    `• Email: ${data.email.trim()}`,
    `• Phone: ${data.phone.trim()}`,
    `• Service Required: ${data.service}`,
    `• Estimated Budget: ${budget}`,
    ``,
    `Project Details:`,
    `${data.message.trim()}`,
    ``,
    `I would like to discuss my project further. Please contact me.`,
    ``,
    `Thank you!`
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a direct context-specific WhatsApp link for a specific service.
 */
export function buildServiceWhatsAppUrl(serviceTitle: string): string {
  const phone = SITE_CONFIG.contacts.primaryPhoneRaw;
  const message = [
    `Hello NextStep Digital!`,
    ``,
    `I am interested in your "${serviceTitle}" service and would like to discuss a project.`,
    ``,
    `Could you please share more information and how we can get started?`,
    ``,
    `Thank you!`
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a general quick-connect WhatsApp link for the floating button or navbar.
 */
export function buildQuickChatWhatsAppUrl(customGreeting?: string): string {
  const phone = SITE_CONFIG.contacts.primaryPhoneRaw;
  const message = customGreeting || [
    `Hello NextStep Digital!`,
    ``,
    `I visited your website and would like to discuss a potential digital project with your team.`,
    ``,
    `Thank you!`
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Safely opens a WhatsApp URL in a new browser tab/app.
 */
export function openWhatsApp(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
