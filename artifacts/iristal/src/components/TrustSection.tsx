import { motion } from "framer-motion";
import { Clock, Shield, Users, Wrench, MessageSquare, CalendarCheck } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "15+ ani experiență",
    description: "Mii de lucrări finalizate în Iași și împrejurimi. Știm ce funcționează.",
  },
  {
    icon: Shield,
    title: "Contract direct Altex",
    description: "Suntem parteneri certificați — montăm aparatele pe care le cumperi de la Altex.",
  },
  {
    icon: Users,
    title: "Locuințe și firme",
    description: "Lucrăm atât pentru persoane fizice cât și pentru clienți business.",
  },
  {
    icon: Wrench,
    title: "Execuție profesională",
    description: "Materiale de calitate, respectăm normele tehnice și lăsăm locul curat.",
  },
  {
    icon: MessageSquare,
    title: "Consultanță gratuită",
    description: "Te ajutăm să alegi echipamentul potrivit și îți explicăm transparent costurile.",
  },
  {
    icon: CalendarCheck,
    title: "Respectăm termenele",
    description: "Venim la ora stabilită și finalizăm lucrarea conform programării.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-[#0b1f45] relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-amber-400/15 border border-amber-400/30 rounded-full px-4 py-1.5 text-amber-400 font-bold text-sm uppercase tracking-widest mb-5">
            De ce Iristal
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            De ce să alegi <span className="text-amber-400">Iristal?</span>
          </h2>
          <p className="text-blue-200/70 text-lg max-w-xl mx-auto">
            O echipă pe care te poți baza — lucrări corecte, prețuri transparente, fără surprize.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-400/15 group-hover:bg-amber-400 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300">
                <adv.icon className="w-6 h-6 text-amber-400 group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-black text-white text-lg mb-1.5">{adv.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{adv.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
