import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AuthoritySection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block bg-[#0b1f45]/10 rounded-lg px-3 py-1 text-[#0b1f45] font-bold text-sm uppercase tracking-widest mb-5">
              Despre noi
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b1f45] leading-tight mb-6">
              Experiență reală.<br />
              <span className="text-amber-500">Lucrări corecte.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Iristal oferă servicii de instalații bazate pe experiență, seriozitate și atenție la detalii. Fiecare proiect este tratat profesionist — de la prima discuție până la finalizare.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Suntem în piața din Iași de peste 15 ani. Am instalat mii de aparate de aer condiționat, sute de centrale termice și am realizat instalații complete pentru apartamente, case și spații comerciale. Parteneriatul cu Altex ne confirmă competența.
            </p>
            <button
              onClick={scrollToContact}
              data-testid="button-authority-offer"
              className="group inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-7 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-400/20"
            >
              Solicită o ofertă acum
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right — stat grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-5">
            {[
              { value: "15+", label: "Ani în piață", sub: "Experiență validată" },
              { value: "Altex", label: "Partener contractual", sub: "Contract oficial" },
              { value: "Iași", label: "Zona noastră", sub: "Intervenții rapide" },
              { value: "100%", label: "Lucrări garantate", sub: "Calitate asigurată" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-3xl p-7 flex flex-col justify-between ${
                  i === 1
                    ? "bg-amber-400 text-slate-900"
                    : "bg-[#0b1f45] text-white"
                }`}
              >
                <div className={`text-4xl md:text-5xl font-black mb-2 ${i === 1 ? "text-slate-900" : "text-amber-400"}`}>
                  {stat.value}
                </div>
                <div>
                  <div className={`font-black text-base ${i === 1 ? "text-slate-900" : "text-white"}`}>{stat.label}</div>
                  <div className={`text-sm mt-0.5 ${i === 1 ? "text-slate-700" : "text-blue-200/60"}`}>{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
