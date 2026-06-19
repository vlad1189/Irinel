import { Phone, ShieldCheck, Wrench, Award, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-primary text-white overflow-hidden">
      {/* Background Image Mobile, Right Side Desktop */}
      <div className="absolute inset-0 z-0 lg:w-1/2 lg:left-1/2">
        <div className="absolute inset-0 bg-primary/90 lg:bg-gradient-to-r lg:from-primary lg:to-transparent z-10"></div>
        <img 
          src="/src/assets/images/hero.png" 
          alt="Instalator aer condiționat Iași" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-md">
              Instalații profesionale în Iași – Confort și siguranță pentru casa ta
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-xl font-medium drop-shadow">
              Cu peste 15 ani experiență, Iristal oferă servicii complete de instalații, de la aer condiționat până la centrale termice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={scrollToContact} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg font-bold h-14 px-8 w-full sm:w-auto shadow-lg">
                Solicită ofertă gratuită
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold h-14 px-8 w-full sm:w-auto shadow-lg bg-transparent">
                <a href="tel:0747140591">
                  <Phone className="w-5 h-5 mr-2" />
                  Sună acum: 0747 140 591
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-2 md:flex md:flex-row flex-wrap gap-3 mt-8"
          >
            {[
              { icon: Award, text: "15+ Ani experiență" },
              { icon: ShieldCheck, text: "Contract Altex" },
              { icon: Wrench, text: "Instalatori profesioniști" },
              { icon: MapPin, text: "Intervenții în Iași" },
              { icon: CheckCircle, text: "Lucrări garantate" },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <badge.icon className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-white">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
