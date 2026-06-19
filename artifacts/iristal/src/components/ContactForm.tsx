import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Numele este obligatoriu (minim 2 caractere)." }),
  phone: z.string().regex(/^(?:(?:(?:\+4)?07\d{2}\s?\d{3}\s?\d{3})|(?:(?:\+4)?02\d{2}\s?\d{3}\s?\d{3})|(?:(?:\+4)?03\d{2}\s?\d{3}\s?\d{3}))$/, {
    message: "Număr de telefon invalid. Te rugăm să introduci un număr din România.",
  }),
  service: z.string({ required_error: "Te rugăm să selectezi un serviciu." }),
  message: z.string().optional(),
});

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to a backend
    console.log("Form submitted:", values);
    setIsSuccess(true);
    form.reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  }

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-primary opacity-50 mix-blend-multiply"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Primește o ofertă rapidă</h2>
            <p className="text-xl text-blue-100/80 mb-8 font-medium">
              Completează formularul și te contactăm în cel mai scurt timp pentru a discuta detaliile proiectului tău.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-lg bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 w-fit lg:w-auto mx-auto lg:mx-0">
              <span className="font-semibold text-blue-200">Sau sună direct la:</span>
              <a href="tel:0747140591" className="font-bold text-secondary text-2xl hover:underline">0747 140 591</a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-900 relative overflow-hidden">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mulțumim!</h3>
                  <p className="text-lg text-gray-600">Te vom contacta în cel mai scurt timp pentru a stabili detaliile.</p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Nume și Prenume *</FormLabel>
                          <FormControl>
                            <Input placeholder="Popescu Ion" className="h-12 text-base rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Telefon *</FormLabel>
                          <FormControl>
                            <Input placeholder="07XX XXX XXX" className="h-12 text-base rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Serviciu dorit *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-base rounded-xl">
                                <SelectValue placeholder="Alege serviciul" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="aer_conditionat">Aer condiționat</SelectItem>
                              <SelectItem value="centrala_termica">Centrală termică</SelectItem>
                              <SelectItem value="instalatii_complete">Instalații complete</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Mesaj (Opțional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Oferă-ne câteva detalii despre lucrare..." 
                              className="resize-none min-h-[100px] rounded-xl text-base"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl font-bold h-14 rounded-xl shadow-md transition-transform hover:scale-[1.02]">
                      Solicită oferta
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
