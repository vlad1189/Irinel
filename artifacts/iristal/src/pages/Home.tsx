import { Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AltexSection } from "@/components/AltexSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
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
        <AltexSection />
        <ServicesSection />
        <TrustSection />
        <AuthoritySection />
        <ContactForm />
        <Testimonials />
      </main>
      <Footer />

      {/* Floating Mobile CTA */}
      <a
        href="tel:0747140591"
        data-testid="button-floating-call"
        className="md:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-5 py-4 rounded-2xl shadow-2xl shadow-amber-500/40 transition-all duration-200 hover:scale-105"
        aria-label="Suna acum"
      >
        <Phone className="w-6 h-6" />
        <span className="text-base">Sună acum</span>
      </a>
    </div>
  );
}
