export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  badge: string;
  iconName: string;
  features: string[];
  gradient: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'leadership' | 'tech' | 'content' | 'marketing';
  description: string;
  initials: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Websites' | 'Digital Campaigns' | 'Creative Content' | 'AI Videos';
  description: string;
  tags: string[];
  imagePlaceholder: string;
  deliverables: string[];
}

export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}
