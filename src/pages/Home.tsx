import { Button } from "@/src/components/ui/Button";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Stethoscope, Heart, Baby, Brain, Apple, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const services = [
  { icon: Baby, name: "Pediatría General", desc: "Cuidado integral para bebés, niños y adolescentes." },
  { icon: Apple, name: "Nutrición Infantil", desc: "Planes de alimentación saludable para el crecimiento." },
  { icon: Brain, name: "Psicología Infantil", desc: "Apoyo emocional y conductual para los más pequeños." },
  { icon: Heart, name: "Terapias", desc: "Física, ocupacional y de lenguaje especializada." },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/90 via-brand-cream/40 to-transparent z-10" />
        <img 
          src="/artifacts/pediatric_clinic_hero.png" 
          alt="Clínica Pediátrica" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <div className="flex items-center gap-2 text-brand-teal font-semibold text-sm uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-brand-teal" />
              Bienvenidos a M&J Kids
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Cuidamos lo más <span className="text-brand-teal">valioso</span> para ti
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Ofrecemos atención integral de alta calidad en un ambiente cálido y seguro. Tu tranquilidad es nuestra prioridad.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/agenda">
                <Button size="lg" className="px-10">
                  Agendar Cita
                </Button>
              </Link>
              <Link to="/especialidades">
                <Button variant="outline" size="lg" className="px-10">
                  Ver Especialidades
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeading 
              align="left"
              title="Tu historia empieza con el mejor cuidado"
              subtitle="Somos una clínica pediátrica y familiar en Nicoya, Guanacaste, comprometidos con el bienestar integral de tus hijos. Ofrecemos un ambiente cálido y atención especializada para cada etapa de su desarrollo."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Ubicación", desc: "Nicoya, Guanacaste", icon: "📍" },
                { title: "Teléfono", desc: "8868-9103", icon: "📞" }
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative group"
          >
             <div className="absolute inset-0 bg-brand-teal/10 group-hover:bg-transparent transition-colors duration-500" />
             <img 
               src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop" 
               alt="Family in clinic" 
               className="w-full h-full object-cover aspect-[4/3]"
             />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-brand-light-teal py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Nuestros Servicios"
            subtitle="Ofrecemos una amplia gama de especialidades para cubrir todas las necesidades de salud de tu familia."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-brand-light-teal rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="text-brand-teal w-8 h-8 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/especialidades" className="text-brand-teal font-semibold text-sm flex items-center gap-2 group/link">
                  Ver más <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-teal rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              ¿Listo para cuidar la salud de tus hijos?
            </h2>
            <p className="text-brand-light-teal text-lg max-w-xl mx-auto">
              Agenda una cita hoy mismo con nuestros especialistas y vive la experiencia M&J Kids.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/agenda">
                <Button size="lg" className="bg-white text-brand-teal hover:bg-brand-light-teal px-10">
                  Agendar ahora
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-10">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
