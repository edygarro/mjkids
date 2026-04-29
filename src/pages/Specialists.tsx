import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";
import { motion } from "motion/react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const specialists = [
  { id: 1, name: "Dr. Sofia Ramirez", role: "Pediatra", img: "https://images.unsplash.com/photo-1559839734-2b71ef15995b?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "Dr. Carlos Mendez", role: "Odontopediatra", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Dra. Elena Cruz", role: "Psicólogo Infantil", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, name: "Dr. Mateo Vargas", role: "Cardiólogo", img: "https://images.unsplash.com/photo-1622253692010-33392da6031d?q=80&w=1964&auto=format&fit=crop" },
  { id: 5, name: "Dra. Isabela Lopez", role: "Dermatologist", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop" },
  { id: 6, name: "Dr. Diego Fernandez", role: "Gastroenterologist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" },
];

export default function Specialists() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Directorio de Especialistas"
          subtitle="Encuentre el especialista pediátrico y familiar adecuado para sus seres queridos en Nicoya, Guanacaste."
        />

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar por nombre o palabra clave..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal outline-none transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative min-w-[240px]">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select className="w-full pl-12 pr-10 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal outline-none appearance-none transition-all shadow-sm">
              <option>Todas las especialidades</option>
              <option>Pediatría</option>
              <option>Odontología</option>
              <option>Psicología</option>
              <option>Cardiología</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ArrowRight className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist, idx) => (
            <motion.div
              key={specialist.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-50"
            >
              <div className="relative mb-6 aspect-square rounded-[2rem] overflow-hidden">
                <img 
                  src={specialist.img} 
                  alt={specialist.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                    {specialist.name}
                  </h3>
                  <p className="text-sm font-medium text-brand-teal mt-1">
                    {specialist.role}
                  </p>
                </div>
                <Link to="/agenda" className="block">
                  <Button variant="outline" className="w-full rounded-2xl border-brand-teal/20 group-hover:border-brand-teal group-hover:bg-brand-teal group-hover:text-white">
                    Ver Perfil
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
