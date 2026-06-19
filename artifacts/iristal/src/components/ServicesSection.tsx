import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import acImg from "../assets/images/service-ac.png";
import boilerImg from "../assets/images/service-boiler.png";
import plumbingImg from "../assets/images/service-plumbing.png";

const services = [
  {
    title: "Aer condiționat",
    subtitle: "Montaj & instalare",
    description:
      "Montaj profesional aparate de aer condiționat, indiferent de marcă sau model. Inclusiv aparate achiziționate de la Altex.",
    image: acImg,
    tag: "Partener Altex",
  },
  {
    title: "Centrale termice",
    subtitle: "Instalare & service",
    description:
      "Instalare centrale termice pe gaz sau în condensație. Adaptăm soluția la suprafața și nevoile locuinței tale.",
    image: boilerImg,
    tag: "Experiență 15+ ani",
  },
  {
    title: "Instalații complete",
    subtitle: "Termic & sanitar",
    description:
      "Lucrări complete de instalații pentru apartamente, case și spații comerciale. De la țeavă până la robinet.",
    image: plumbingImg,
    tag: "Lucrări la cheie",
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#f4f6fb]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-[#0b1f45]/10 rounded-lg px-3 py-1 text-[#0b1f45] font-bold text-sm uppercase tracking-widest mb-4">
            Ce facem
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0b1f45] mb-4">Serviciile noastre</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Soluții complete pentru confortul casei tale — iarnă și vară.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f45]/90 via-[#0b1f45]/20 to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-amber-400 text-slate-900 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {service.tag}
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-1">{service.subtitle}</div>
                  <h3 className="text-2xl font-black text-white">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-500 text-base leading-relaxed flex-grow mb-6">{service.description}</p>
                <button
                  onClick={scrollToContact}
                  data-testid={`button-service-${index}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-[#0b1f45] hover:bg-amber-400 text-white hover:text-slate-900 font-bold py-3.5 rounded-xl transition-all duration-300"
                >
                  Solicită ofertă
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
