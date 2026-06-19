import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Andrei M.",
      text: "Profesionalism desăvârșit! Au montat aerul condiționat rapid și curat. Recomand cu toată încrederea."
    },
    {
      name: "Maria P.",
      text: "Am schimbat centrala termică cu ajutorul lor. Totul a mers perfect, prețuri corecte și lucrare de calitate."
    },
    {
      name: "Ioan D.",
      text: "Au venit la timp, au lucrat ordonat și au explicat tot ce au făcut. Cea mai bună firmă de instalații din Iași."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clienți mulțumiți din Iași</h2>
          <p className="text-lg text-gray-600">Părerile celor care au ales deja calitatea și siguranța serviciilor noastre.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-secondary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed flex-grow mb-6">
                "{testimonial.text}"
              </p>
              <div className="font-bold text-gray-900 text-lg">
                — {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
