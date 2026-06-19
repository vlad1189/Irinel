import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1f45] shadow-2xl shadow-black/30"
          : "bg-[#0b1f45]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-widest text-white">IRISTAL</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-amber-400 uppercase">Instalații Profesionale</span>
          </div>
        </a>

        <div className="flex items-center gap-3 md:gap-6">
          <a
            href="tel:0747140591"
            className="hidden md:flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-base font-semibold">0747 140 591</span>
          </a>
          <button
            onClick={scrollToContact}
            className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Solicită ofertă
          </button>
        </div>
      </div>
    </nav>
  );
}
