import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MessageCircle, Brain, Users, Heart, Baby, Footprints } from "lucide-react";

const specialties = [
  {
    title: "Terapia de Lenguaje",
    desc: "Ayudando a niños y adultos a mejorar la comunicación, el habla y las habilidades del lenguaje.",
    icon: MessageCircle,
    img: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d9d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Pediatría",
    desc: "Atención médica integral para bebés, niños y adolescentes, desde chequeos hasta visitas por enfermedad.",
    icon: Baby,
    img: "https://images.unsplash.com/photo-1537367663815-6cefe584dd31?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Medicina de Familia",
    desc: "Atención primaria para personas de todas las edades, enfocada en la salud preventiva y el manejo de condiciones crónicas.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Psicología",
    desc: "Apoyo de salud mental y terapia para niños y adultos para abordar necesidades emocionales y conductuales.",
    icon: Brain,
    img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Psicopedagogía",
    desc: "Apoyo especializado para dificultades de aprendizaje, retrasos en el desarrollo y desafíos educativos.",
    icon: Brain,
    img: "https://images.unsplash.com/photo-1491309055486-24ae511c15c7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Terapia Física",
    desc: "Restauración del movimiento y la función a través de ejercicios, terapia manual y rehabilitación.",
    icon: Heart,
    img: "https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Specialties() {
  return (
    <div className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Nuestras Especialidades"
          subtitle="Cuidado pediátrico y familiar dedicado para niños y adultos en Nicoya, Guanacaste."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="p-3 bg-brand-teal rounded-xl text-white shadow-lg">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <p className="text-slate-600 text-sm leading-relaxed min-h-[4.5rem]">
                  {item.desc}
                </p>
                <Link to="/especialistas">
                  <Button variant="outline" className="w-full rounded-2xl">
                    Ver Especialistas
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
