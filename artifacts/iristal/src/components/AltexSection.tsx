import { motion } from "framer-motion";
import { ShieldCheck, Wrench, ThumbsUp, ArrowRight } from "lucide-react";

export function AltexSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left — visual statement card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 shrink-0"
          >
            <div className="relative bg-[#0b1f45] rounded-3xl p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full translate-y-6 -translate-x-6" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 rounded-full px-3 py-1.5 mb-6">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-amber-400 text-xs font-black tracking-widest uppercase">Contract oficial</span>
                </div>

                <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">ALTEX</div>
                <div className="text-lg font-bold text-amber-400 mb-6">Contract de colaborare</div>

                <p className="text-blue-200/80 leading-relaxed text-sm md:text-base">
                  Iristal deține un <strong className="text-white">contract de colaborare cu Altex</strong> — cel mai mare retailer de electronice din România. Un semn clar al seriozității și competenței noastre.
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

          {/* Right — explanation */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-amber-400/10 rounded-lg px-3 py-1 text-amber-600 font-bold text-sm uppercase tracking-widest mb-4">
                Un parteneriat care face diferența
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0b1f45] leading-tight mb-6">
                Parteneri de încredere<br />
                <span className="text-amber-500">recunoscuți de Altex</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Contractul nostru cu Altex nu este un detaliu — este o dovadă că lucrăm la standarde înalte. Altex, ca unul dintre cei mai mari jucători din piața românească, colaborează doar cu firme verificate și de încredere.
              </p>
            </motion.div>

            <div className="space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Calitate verificată",
                  desc: "Un contract cu Altex presupune respectarea unor standarde stricte de calitate și profesionalism.",
                },
                {
                  icon: Wrench,
                  title: "Experiență dovedită",
                  desc: "Peste 15 ani de lucrări profesionale stau la baza acestei colaborări. Știm ce facem.",
                },
                {
                  icon: ThumbsUp,
                  title: "Seriozitate și punctualitate",
                  desc: "Venim la timp, lucrăm corect și lăsăm totul curat. Clienții noștri știu asta.",
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
                Solicită o ofertă
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
