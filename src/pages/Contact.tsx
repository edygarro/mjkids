import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Facebook, Instagram, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
          alt="Clinic facade" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-brand-teal/10" />
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-teal">Contacto y Ubicación</h1>
          <p className="text-slate-600 font-medium max-w-lg mx-auto">Su clínica pediátrica y familiar en Nicoya, Guanacaste.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Map & Info */}
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-[3rem] shadow-2xl border-8 border-brand-teal/5 overflow-hidden">
              <div className="aspect-[4/3] w-full bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.56346761352!2d-85.45233152431!3d10.1430939899178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fb096e5797d05%3A0xc6c7d1e8c1e8c1e8!2sNicoya%2C%20Guanacaste%20Province%2C%20Nicoya!5e0!3m2!1sen!2scr!4v1714418000000!5m2!1sen!2scr" 
                  className="w-full h-full grayscale opacity-80"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-brand-light-teal rounded-2xl">
                  <Phone className="w-8 h-8 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Teléfono</h4>
                  <p className="text-slate-600 text-sm">8868-9103</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-brand-light-teal rounded-2xl">
                  <Mail className="w-8 h-8 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600 text-sm">info@mjkidsnicoya.com</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-light-teal p-10 rounded-[3rem] space-y-6">
              <h3 className="text-2xl font-bold text-brand-teal">Visítanos</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-brand-teal shrink-0" />
                  <p className="text-slate-700 font-medium">100mt al oeste y 50mt al sur de la plazoleta del parque, Nicoya, Guanacaste, Costa Rica</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-1">Horario Semana</h5>
                    <p className="text-sm text-slate-600 font-medium underline decoration-brand-orange/30">Lunes a Viernes: 8am - 6pm</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-1">Fines de Semana</h5>
                    <p className="text-sm text-slate-600 font-medium">Sábados: 9am - 1pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-brand-orange/10 flex flex-col justify-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Formulario de Contacto</h2>
                <p className="text-slate-500 font-medium">Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Nombre Completo</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Correo Electrónico</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Teléfono</label>
                  <input type="tel" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal outline-none transition-all resize-none" />
                </div>
                <Button className="w-full py-6 text-lg rounded-2xl group" variant="primary">
                  Enviar Mensaje <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
              
              <div className="flex justify-center gap-6 pt-8 border-t border-slate-100">
                <a href="#" className="p-3 bg-brand-light-teal rounded-xl text-brand-teal hover:bg-brand-teal hover:text-white transition-all"><Facebook /></a>
                <a href="#" className="p-3 bg-brand-light-teal rounded-xl text-brand-teal hover:bg-brand-teal hover:text-white transition-all"><Instagram /></a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
