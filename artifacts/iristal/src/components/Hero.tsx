import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center bg-[#0b1f45] overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f45] via-[#0d2558] to-[#071530]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0f2d6b]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      {/* Hero image — full width background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f45]/95 via-[#0b1f45]/70 to-[#0b1f45]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f45]/80 via-transparent to-transparent z-10" />
        <img
          src={heroImg}
          alt="Instalatii profesionale Iasi"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 py-20 md:py-32 w-full">
        <div className="max-w-2xl">
          {/* Altex badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/40 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400 font-bold text-sm tracking-widest uppercase">Contract de colaborare Altex</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6"
          >
            Instalații profesionale<br />
            <span className="text-amber-400">în Iași</span> — confort<br />
            și siguranță acasă
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-200/80 mb-8 leading-relaxed max-w-xl"
          >
            Cu peste <strong className="text-white">15 ani experiență</strong>, Iristal oferă servicii complete de instalații — aer condiționat, centrale termice și instalații sanitare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-2 mb-10"
          >
            {[
              "Garanție lucrări. Prețuri transparente.",
              "Intervenții rapide în Iași și împrejurimi",
              "Peste 15 ani de experiență în instalații",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-white/90 font-medium">{point}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              data-testid="button-hero-offer"
              className="group flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-lg px-8 py-4 rounded-xl shadow-2xl shadow-amber-500/30 transition-all duration-200 hover:scale-105"
            >
              Solicită ofertă gratuită
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:0747140591"
              data-testid="button-hero-call"
              className="flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              0747 140 591
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-20 border-t border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { number: "15+", label: "Ani experiență" },
            { number: "Altex", label: "Contract colaborare" },
            { number: "Iași", label: "Intervenții rapide" },
            { number: "100%", label: "Lucrări garantate" },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="text-2xl md:text-3xl font-black text-amber-400">{stat.number}</div>
              <div className="text-xs md:text-sm text-blue-200/70 font-medium uppercase tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
