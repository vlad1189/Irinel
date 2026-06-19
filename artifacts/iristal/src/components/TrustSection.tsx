import { motion } from "framer-motion";
import { CheckCircle2, Shield, Wrench, Clock, Users, ThumbsUp } from "lucide-react";

export function TrustSection() {
  const advantages = [
    {
      icon: Clock,
      title: "Experiență de peste 15 ani",
      description: "Am finalizat cu succes mii de lucrări în Iași și împrejurimi. Știm exact cum să abordăm fiecare proiect."
    },
    {
      icon: Shield,
      title: "Partener de încredere pentru Altex",
      description: "Colaborăm de ani de zile cu cel mai mare retailer de electronice din România pentru montajul aparatelor."
    },
    {
      icon: Users,
      title: "Soluții complete pentru locuințe și firme",
      description: "Oferim servicii adaptate atât pentru apartamente și case, cât și pentru spații comerciale."
    },
    {
      icon: Wrench,
      title: "Execuție profesională",
      description: "Lucrăm curat, folosim materiale de calitate și respectăm normele tehnice de siguranță."
    },
    {
      icon: ThumbsUp,
      title: "Consultanță înainte de lucrare",
      description: "Te ajutăm să alegi echipamentul potrivit nevoilor tale și îți explicăm transparent costurile."
    },
    {
      icon: CheckCircle2,
      title: "Respectarea termenelor",
      description: "Ne prezentăm la timp la lucrare și finalizăm proiectul conform programării stabilite."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">De ce să alegi Iristal?</h2>
          <p className="text-lg text-gray-600">O echipă pe care te poți baza. Ne mândrim cu lucrări executate corect, la timp și fără costuri ascunse.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <adv.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
              <p className="text-gray-600 leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
