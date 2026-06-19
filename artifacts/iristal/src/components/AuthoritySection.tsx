import { motion } from "framer-motion";

export function AuthoritySection() {
  const stats = [
    { value: "15+", label: "Ani experiență" },
    { value: "100%", label: "Profesionalism" },
    { value: "Iași", label: "Zona de lucru" },
    { value: "Altex", label: "Partener contractual" }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Experiență reală. Lucrări făcute corect.</h2>
          <p className="text-xl text-blue-100/90 leading-relaxed font-medium">
            Iristal oferă servicii de instalații bazate pe experiență, seriozitate și atenție la detalii. Fiecare proiect este tratat profesionist, de la prima discuție până la finalizarea lucrării.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-xl transform transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
