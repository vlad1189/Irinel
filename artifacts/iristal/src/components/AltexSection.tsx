import { motion } from "framer-motion";
import { ShieldCheck, Wrench, ThumbsUp, ArrowRight } from "lucide-react";

export function AltexSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left — big visual statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 shrink-0"
          >
            {/* Altex partnership card */}
            <div className="relative bg-[#0b1f45] rounded-3xl p-8 md:p-10 overflow-hidden">
              {/* Geometric accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full translate-y-6 -translate-x-6" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 rounded-full px-3 py-1.5 mb-6">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-amber-400 text-xs font-black tracking-widest uppercase">Contract oficial</span>
                </div>

                <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">ALTEX</div>
                <div className="text-lg font-bold text-amber-400 mb-6">Partener certificat pentru montaj</div>

                <p className="text-blue-200/80 leading-relaxed text-sm md:text-base">
                  Iristal este unul dintre puținii instalatori din Iași cu <strong className="text-white">contract direct cu Altex</strong> — cel mai mare retailer de electronice din România.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-black text-amber-400">15+</div>
                    <div className="text-blue-200/70 text-xs uppercase tracking-wider mt-0.5">Ani în piață</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-amber-400">Iași</div>
                    <div className="text-blue-200/70 text-xs uppercase tracking-wider mt-0.5">Zona noastră</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — explanation and benefits */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-amber-400/10 rounded-lg px-3 py-1 text-amber-600 font-bold text-sm uppercase tracking-widest mb-4">
                De ce contează
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0b1f45] leading-tight mb-6">
                Instalăm ce cumperi<br />
                <span className="text-amber-500">de la Altex</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Ai cumpărat sau vrei să cumperi un aparat de aer condiționat de la Altex? Iristal îl montează cu garanție, la prețuri transparente — ca partener oficial, nu ca un necunoscut.
              </p>
            </motion.div>

            <div className="space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Garanție completă a lucrării",
                  desc: "Montaj conform standardelor Altex. Garanția produsului rămâne intactă.",
                },
                {
                  icon: Wrench,
                  title: "Instalatori cu experiență certificată",
                  desc: "Peste 15 ani de montaje profesionale. Știm exact cum lucrăm cu orice aparat.",
                },
                {
                  icon: ThumbsUp,
                  title: "Prețuri corecte, fără surprize",
                  desc: "Deviz clar înainte de lucrare. Plătești exact ce ți s-a spus.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#0b1f45] group-hover:bg-amber-400 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-amber-400 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1f45] text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8"
            >
              <button
                onClick={scrollToContact}
                data-testid="button-altex-offer"
                className="group inline-flex items-center gap-2 bg-[#0b1f45] hover:bg-amber-400 text-white hover:text-slate-900 font-bold text-base px-7 py-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                Solicită montaj
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
