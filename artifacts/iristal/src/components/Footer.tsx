import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-white tracking-tight">IRISTAL</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Servicii profesionale de instalații termice și sanitare în Iași. Experiență, seriozitate și respect față de client.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Informații Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <span className="text-lg">Iași, România<br />(Intervenții în oraș și zonele limitrofe)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-6 h-6 text-secondary shrink-0" />
                <a href="tel:0747140591" className="text-lg hover:text-white transition-colors">0747 140 591</a>
              </li>
            </ul>
            <Button asChild className="w-full sm:w-auto mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg h-14 px-8 rounded-xl shadow-lg">
              <a href="tel:0747140591">Sună acum</a>
            </Button>
          </div>

          <div className="h-64 lg:h-auto rounded-xl overflow-hidden shadow-xl border border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87461.03!2d27.5266!3d47.1585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x5f1c2efdf4ba3e4!2sIa%C8%99i!5e0!3m2!1sro!2sro!4v1640000000000!5m2!1sro!2sro" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație Iristal Iași"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Iristal. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
