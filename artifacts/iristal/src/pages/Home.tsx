import { Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <AuthoritySection />
        <ContactForm />
        <Testimonials />
      </main>
      <Footer />

      {/* Floating Mobile CTA */}
      <a 
        href="tel:0747140591" 
        className="md:hidden fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground p-4 rounded-full shadow-2xl transition-transform hover:scale-105 animate-pulse"
        aria-label="Sună acum"
      >
        <Phone className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
