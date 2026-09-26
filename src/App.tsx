import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [selectedServiceForEnquiry, setSelectedServiceForEnquiry] = useState<string | undefined>(undefined);

  const scrollToContact = (service?: string) => {
    if (service) {
      setSelectedServiceForEnquiry(service);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={() => scrollToContact()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartProject={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 4 Core Pillars Trust Bar */}
        <TrustBar />

        {/* Services Section */}
        <Services onSelectService={(serviceTitle) => scrollToContact(serviceTitle)} />

        {/* About Section */}
        <About />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Team Section */}
        <Team />

        {/* Portfolio Section */}
        <Portfolio onEnquireProject={(category) => scrollToContact(category)} />

        {/* Process Section */}
        <Process />

        {/* Contact and Enquiry Form with WhatsApp Integration */}
        <ContactSection preselectedService={selectedServiceForEnquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
