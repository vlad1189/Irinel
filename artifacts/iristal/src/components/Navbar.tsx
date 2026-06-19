import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-primary tracking-tight">IRISTAL</span>
        </a>
        
        <div className="flex items-center gap-4 md:gap-8">
          <a href="tel:0747140591" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            <Phone className="w-5 h-5" />
            <span className="text-lg">0747 140 591</span>
          </a>
          <Button onClick={scrollToContact} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6">
            Solicită ofertă
          </Button>
        </div>
      </div>
    </nav>
  );
}
