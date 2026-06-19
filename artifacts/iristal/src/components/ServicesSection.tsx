import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Aer condiționat",
      description: "Montaj profesional aparate de aer condiționat, instalare și configurare pentru confort maxim.",
      image: "/src/assets/images/service-ac.png",
      delay: 0.1
    },
    {
      title: "Centrale termice",
      description: "Instalare centrale termice realizată corect și eficient, adaptată nevoilor fiecărei locuințe.",
      image: "/src/assets/images/service-boiler.png",
      delay: 0.2
    },
    {
      title: "Instalații complete",
      description: "Lucrări complete de instalații termice și sanitare pentru apartamente, case și spații comerciale.",
      image: "/src/assets/images/service-plumbing.png",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serviciile noastre</h2>
          <p className="text-lg text-gray-600">Indiferent de anotimp, ne asigurăm că locuința ta oferă confortul perfect. Soluții la cheie pentru instalații.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-md">{service.title}</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-8 flex-grow text-lg leading-relaxed">{service.description}</p>
                <Button onClick={scrollToContact} className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg rounded-xl">
                  Solicită ofertă
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
