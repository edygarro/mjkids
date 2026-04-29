import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";
import { motion } from "motion/react";
import { Star, MessageSquarePlus, Heart, Baby, Brain } from "lucide-react";
import { cn } from "@/src/lib/utils";

const reviews = [
  { name: "Maria S., Nicoya", date: "June 12, 2023", text: "¡Increíble atención! Los doctores de M&J Kids son súper amables y pacientes con los niños. Nos sentimos muy tranquilos.", rating: 5, avatar: "https://i.pravatar.cc/150?u=1" },
  { name: "Familia Rodriguez", date: "June 13, 2023", text: "Excelente servicio en Nicoya. El personal es profesional y el ambiente es muy acogedor para los pequeños. Recomendados 100%.", rating: 5, avatar: "https://i.pravatar.cc/150?u=2" },
  { name: "Laura G. & Pablo", date: "June 12, 2023", text: "Nos encanta M&J Kids. La Dra. Jiménez es maravillosa, muy dedicada. Nuestros hijos van felices.", rating: 5, avatar: "https://i.pravatar.cc/150?u=3" },
  { name: "Maria S., Nicoya", date: "June 12, 2023", text: "¡Increíble atención! Los doctores de M&J Kids son súper amables y pacientes con los niños. Nos sentimos muy tranquilos.", rating: 5, avatar: "https://i.pravatar.cc/150?u=4" },
  { name: "Familia Rodriguez", date: "June 13, 2023", text: "Excelente servicio en Nicoya. El personal es profesional y el ambiente es muy acogedor para los pequeños. Recomendados 100%.", rating: 5, avatar: "https://i.pravatar.cc/150?u=5" },
  { name: "Laura G. & Pablo", date: "June 12, 2023", text: "Nos encanta M&J Kids. La Dra. Jiménez es maravillosa, muy dedicada. Nuestros hijos van felices.", rating: 5, avatar: "https://i.pravatar.cc/150?u=6" },
];

export default function Opinions() {
  return (
    <div className="pb-24">
      {/* Colorful Header */}
      <section className="bg-gradient-to-br from-brand-orange via-brand-teal to-brand-green py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white" />
           <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rotate-45" />
           <div className="absolute top-1/2 left-1/3 w-20 h-20 border-t-8 border-l-8 border-white rounded-tl-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30"
          >
            <Star className="w-4 h-4 fill-white" />
            <span className="text-sm font-bold uppercase tracking-widest">Nuestra Comunidad</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">¡Comparte tu experiencia con M&J Kids!</h1>
          <p className="text-xl text-brand-light-teal max-w-2xl mx-auto font-medium">
            Tu historia ayuda a otras familias a encontrar el mejor cuidado para sus pequeños.
          </p>
          <div className="pt-4">
            <Link to="/contacto">
              <Button className="bg-white text-brand-teal hover:bg-brand-light-teal px-12 py-7 text-lg rounded-2xl shadow-xl flex items-center gap-3 mx-auto">
                <MessageSquarePlus className="w-6 h-6" />
                Escribir una opinión
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 flex flex-col items-center text-center space-y-6 group hover:scale-[1.02] transition-all"
            >
              <div className={cn(
                "p-1 rounded-full",
                idx % 3 === 0 ? "bg-brand-teal" : idx % 3 === 1 ? "bg-brand-orange" : "bg-brand-green"
              )}>
                <img src={review.avatar} alt={review.name} className="w-20 h-20 rounded-full border-4 border-white" />
              </div>
              
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p className="text-slate-600 italic leading-relaxed font-medium">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-300 pointer-events-none select-none">
          <div className="flex justify-center gap-12 opacity-30">
            {[Heart, Baby, Star, Brain, Star, Baby, Heart].map((Icon, i) => (
              <Icon key={i} className={cn("w-12 h-12", i % 2 === 0 ? "scale-75" : "rotate-12")} />
            ))}
          </div>
      </div>
    </div>
  );
}
