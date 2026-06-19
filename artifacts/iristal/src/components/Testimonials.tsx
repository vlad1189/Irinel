import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Andrei M.",
    location: "Iași",
    text: "Profesionalism desăvârșit! Au montat aerul condiționat rapid și curat. Totul a funcționat perfect din prima. Recomand cu toată încrederea.",
    service: "Montaj aer condiționat",
  },
  {
    name: "Maria P.",
    location: "Iași",
    text: "Am schimbat centrala termică cu ajutorul lor. Totul a mers perfect, prețuri corecte și lucrare de calitate. Au și explicat tot procesul.",
    service: "Instalare centrală termică",
  },
  {
    name: "Ioan D.",
    location: "Iași",
    text: "Au venit la timp, au lucrat ordonat și au explicat tot ce au făcut. Cea mai bună firmă de instalații din Iași. Îi recomand oricui.",
    service: "Instalații complete",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-[#f4f6fb]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-amber-400/20 rounded-lg px-3 py-1 text-amber-700 font-bold text-sm uppercase tracking-widest mb-4">
            Recenzii
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0b1f45] mb-4">
            Clienți mulțumiți din Iași
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Părerile celor care au ales deja calitatea serviciilor noastre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-grow mb-6">
                <Quote className="w-8 h-8 text-[#0b1f45]/10 absolute -top-1 -left-1" />
                <p className="text-gray-700 text-base leading-relaxed pl-4 italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 bg-[#0b1f45] rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-black text-[#0b1f45]">{t.name}</div>
                  <div className="text-xs text-gray-400 font-medium">{t.service} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
