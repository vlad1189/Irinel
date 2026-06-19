import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#07152e] text-white">
      {/* CTA Banner before footer */}
      <div className="bg-amber-400 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl md:text-3xl font-black text-slate-900">Pregătit să comenzi o lucrare?</div>
            <div className="text-slate-700 font-medium mt-1">Sună acum sau trimite o cerere — răspundem rapid.</div>
          </div>
          <a
            href="tel:0747140591"
            data-testid="button-footer-call"
            className="flex items-center gap-3 bg-[#0b1f45] hover:bg-[#0d2558] text-white font-black text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shrink-0"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            0747 140 591
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-3xl font-black tracking-widest text-white">IRISTAL</span>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Instalații Profesionale</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Servicii profesionale de instalații termice și sanitare în Iași. Experiență, seriozitate și respect față de client.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-3 py-1.5">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span className="text-amber-400 text-xs font-bold tracking-wider uppercase">Partener Altex</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-black text-white uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Iași, România<br />
                  Intervenții în oraș și zonele limitrofe
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="tel:0747140591" className="text-white font-bold text-lg hover:text-amber-400 transition-colors">
                  0747 140 591
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-52 md:h-auto rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87461.03!2d27.5266!3d47.1585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x5f1c2efdf4ba3e4!2sIa%C8%99i!5e0!3m2!1sro!2sro!4v1640000000000!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Iristal Iasi"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Iristal. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
