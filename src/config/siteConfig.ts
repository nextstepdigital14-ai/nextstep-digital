import type { ServiceItem, TeamMember, PortfolioProject } from '../types';

export const SITE_CONFIG = {
  name: "NextStep Digital",
  tagline: "Your Growth, Our Vision.",
  brandStatement: "Digital Solutions for a Brighter Tomorrow.",
  philosophy: "We believe in results, not publicity. We focus on delivering quality work, building long-term client relationships, and helping businesses grow digitally. Our work and results should speak for themselves.",
  
  // Contact & WhatsApp Configuration (single source of truth)
  contacts: {
    primaryPhone: "+91 98341 29379",
    primaryPhoneRaw: "919834129379", // for WhatsApp click-to-chat
    secondaryPhone: "+91 95798 44212",
    secondaryPhoneRaw: "919579844212",
    email: "nextstepdigital14@gmail.com",
    instagramUrl: "https://www.instagram.com/nextstepdigital14",
    location: "Maharashtra, India",
  },

  // 4 Core Trust Indicators
  trustIndicators: [
    { title: "Creative Solutions", desc: "Fresh ideas & thoughtful execution", icon: "Lightbulb" },
    { title: "Result-Driven Strategies", desc: "Solutions that support real business growth", icon: "TrendingUp" },
    { title: "Reliable Support", desc: "Clear communication & long-term dedication", icon: "ShieldCheck" },
    { title: "Your Success Our Priority", desc: "Every project starts with your objectives", icon: "Users" },
  ],

  // 4 Core Services
  services: [
    {
      id: "web-dev",
      title: "Website Development",
      shortDesc: "Modern, responsive and user-friendly websites that turn visitors into customers.",
      description: "We build modern, responsive, and user-friendly websites that strengthen your online presence and help convert visitors into customers.",
      badge: "Your Website. Our Expertise.",
      iconName: "Code2",
      features: [
        "Business websites",
        "Portfolio websites",
        "Landing pages",
        "E-commerce websites",
        "Custom web applications"
      ],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      shortDesc: "Reach the right audience, boost your brand and drive real results with smart digital strategies.",
      description: "We help businesses reach the right audience, strengthen their brand presence, and achieve measurable growth through smart digital strategies.",
      badge: "More Reach. More Growth.",
      iconName: "Megaphone",
      features: [
        "Social media marketing",
        "Brand promotion",
        "Digital campaign planning",
        "Social media management"
      ],
      gradient: "from-indigo-600 to-blue-500",
    },
    {
      id: "content-creation",
      title: "Content Creation",
      shortDesc: "Engaging content that tells your story, builds trust and connects with your audience.",
      description: "We create engaging and professional digital content that communicates your brand's story and connects with your audience.",
      badge: "Great Content. Real Impact.",
      iconName: "Palette",
      features: [
        "Social media creatives",
        "Promotional posters",
        "Branding content",
        "Marketing creatives"
      ],
      gradient: "from-cyan-600 to-teal-400",
    },
    {
      id: "ai-video",
      title: "AI Video Generation",
      shortDesc: "Stunning, professional videos created with AI to bring your ideas to life — faster & smarter.",
      description: "Transform ideas into engaging videos using modern AI-powered creative tools and professional storytelling.",
      badge: "Ideas to Videos. Powered by AI.",
      iconName: "Video",
      features: [
        "AI promotional videos",
        "Business advertisements",
        "Social media reels",
        "Product and brand videos"
      ],
      gradient: "from-purple-600 to-blue-600",
    },
  ] as ServiceItem[],

  // Team Members
  team: [
    {
      id: "manish-surve",
      name: "Manish Surve",
      role: "Founder / CEO (Technical Lead)",
      category: "leadership",
      description: "Leads vision, strategy, and technical direction.",
      initials: "MS",
    },
    {
      id: "ruturaj-koravi",
      name: "Ruturaj Koravi",
      role: "Web Development Lead",
      category: "tech",
      description: "Builds modern, responsive web solutions.",
      initials: "RK",
    },
    {
      id: "harsh-naik",
      name: "Harsh Naik",
      role: "Web Development Team",
      category: "tech",
      description: "Contributes to developing functional and user-friendly digital solutions.",
      initials: "HN",
    },
    {
      id: "suraj-rajmane",
      name: "Suraj Rajmane",
      role: "Content and Digital Solutions Lead",
      category: "content",
      description: "Creates engaging content and digital experiences.",
      initials: "SR",
    },
    {
      id: "parshuram-ghodake",
      name: "Parshuram Ghodake",
      role: "Content and Digital Solutions Team",
      category: "content",
      description: "Supports content creation and creative digital projects.",
      initials: "PG",
    },
    {
      id: "shreyas-wadgane",
      name: "Shreyas Wadgane",
      role: "Marketing and Business Development Lead",
      category: "marketing",
      description: "Builds connections and drives growth.",
      initials: "SW",
    },
  ] as TeamMember[],

  // Sample Demo Projects (clearly labeled demos to be replaced with client work)
  portfolio: [
    {
      id: "proj-1",
      title: "Apex Horizon Corporate Portal",
      category: "Websites",
      description: "High-performance enterprise web presence featuring interactive service showcases, modern typography, and rapid load times.",
      tags: ["React", "Tailwind CSS", "Corporate", "Responsive"],
      imagePlaceholder: "linear-gradient(135deg, #0B1F3A 0%, #087CF0 100%)",
      deliverables: ["Custom Web Design", "SEO Architecture", "Mobile First", "Contact Pipeline"],
    },
    {
      id: "proj-2",
      title: "GrowthFuel Multi-Channel Campaign",
      category: "Digital Campaigns",
      description: "Targeted digital marketing and social media funnel designed to maximize lead conversion and brand visibility.",
      tags: ["Social Media", "Lead Gen", "Ad Creative", "Analytics"],
      imagePlaceholder: "linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%)",
      deliverables: ["Audience Targeting", "Conversion Copy", "Campaign Strategy", "A/B Testing"],
    },
    {
      id: "proj-3",
      title: "Lumina Brand Identity & Social Suite",
      category: "Creative Content",
      description: "Cohesive visual identity package including modern marketing banners, typography rules, and high-impact social media assets.",
      tags: ["Branding", "Social Banners", "Visual Identity", "Posters"],
      imagePlaceholder: "linear-gradient(135deg, #042F2E 0%, #0D9488 100%)",
      deliverables: ["Brand Styleguide", "Instagram Grid Templates", "Promotional Assets"],
    },
    {
      id: "proj-4",
      title: "NexGen Product Launch Reel",
      category: "AI Videos",
      description: "Cinematic promotional reel generated using cutting-edge AI video generation workflows with voiceover integration.",
      tags: ["AI Video", "Promotional", "Motion Design", "Voiceover"],
      imagePlaceholder: "linear-gradient(135deg, #311042 0%, #9333EA 100%)",
      deliverables: ["AI Script Generation", "High-Definition Render", "Sound Design", "Reel Formats"],
    },
    {
      id: "proj-5",
      title: "Vogue Boutique E-Commerce Store",
      category: "Websites",
      description: "Minimalist fashion e-commerce storefront with optimized product catalog, seamless checkout flow, and mobile optimization.",
      tags: ["E-Commerce", "UI/UX", "Product Showcase", "Mobile"],
      imagePlaceholder: "linear-gradient(135deg, #0F172A 0%, #2563EB 100%)",
      deliverables: ["Catalog Architecture", "Fast Checkout", "WhatsApp Order Assist"],
    },
    {
      id: "proj-6",
      title: "FinTech Narrative AI Explainer",
      category: "AI Videos",
      description: "Engaging 60-second video explaining modern digital payment concepts with animated 3D assets and AI narrator.",
      tags: ["AI Video", "Explainer", "Fintech", "Storytelling"],
      imagePlaceholder: "linear-gradient(135deg, #022C22 0%, #059669 100%)",
      deliverables: ["Storyboard", "Voice Synthesis", "Short-Form Reel"],
    },
  ] as PortfolioProject[],

  // 4-Step How We Work Process
  processSteps: [
    {
      number: "01",
      title: "Discovery",
      desc: "Understand your business, target audience, brand goals, and specific project requirements in detail.",
    },
    {
      number: "02",
      title: "Strategy",
      desc: "Formulate a tailored solution roadmap, creative direction, technology stack, and clear project scope.",
    },
    {
      number: "03",
      title: "Development",
      desc: "Design, develop, create content, and refine the solution with meticulous attention to detail.",
    },
    {
      number: "04",
      title: "Delivery & Support",
      desc: "Smooth launch, performance verification, and ongoing reliable support to ensure your growth.",
    },
  ],

  // Brand Values
  brandValues: [
    {
      title: "Quality Over Quantity",
      desc: "We focus on deliberate craftsmanship rather than churning out generic templates. Every deliverable is polished to agency standards.",
    },
    {
      title: "Results Over Publicity",
      desc: "We don't chase loud publicity or superficial vanity metrics. We let our tangible results and work speak for themselves.",
    },
    {
      title: "Client Success Is Our Priority",
      desc: "Your growth is our vision. We build collaborative, transparent, long-term partnerships focused on real business impact.",
    },
  ],

  budgetRanges: [
    "Under ₹10,000",
    "₹10,000 – ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000+",
    "Discuss with Team",
  ],
};
