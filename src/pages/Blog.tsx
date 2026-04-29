import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";
import { motion } from "motion/react";
import { ArrowRight, Search, Mail } from "lucide-react";

const posts = [
  {
    title: "Nutrición para Niños Pequeños: Creando Hábitos Saludables",
    excerpt: "Descubre consejos prácticos y recetas deliciosas para asegurar que tu hijo reciba los nutrientes esenciales.",
    img: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop",
    category: "Nutrición"
  },
  {
    title: "Beneficios de la Fisioterapia para Niños",
    excerpt: "Explora cómo la fisioterapia pediátrica puede mejorar la movilidad, la fuerza y la coordinación del desarrollo de tu hijo.",
    img: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?q=80&w=2070&auto=format&fit=crop",
    category: "Terapias"
  },
  {
    title: "Importancia del Sueño en el Desarrollo Infantil",
    excerpt: "El descanso es vital para el crecimiento físico y cognitivo. Aprende rutinas efectivas para un mejor sueño.",
    img: "https://images.unsplash.com/photo-1544126592-807daa2b565b?q=80&w=2070&auto=format&fit=crop",
    category: "Desarrollo"
  }
];

export default function Blog() {
  return (
    <div className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="M&J Consejos de Salud"
          subtitle="Información valiosa para el cuidado y desarrollo de tus hijos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, idx) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-50 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-brand-teal uppercase">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-brand-teal font-bold text-sm uppercase tracking-wider group/link">
                      Leer más <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-brand-light-teal p-8 rounded-[2.5rem] space-y-6">
              <h4 className="text-xl font-bold text-slate-900">Categorías</h4>
              <ul className="space-y-4 text-slate-600 font-medium">
                {["Nutrición", "Desarrollo Infantil", "Cuidado Pediátrico", "Salud Mental", "Vacunaciones"].map(cat => (
                  <li key={cat} className="flex items-center gap-3 hover:text-brand-teal cursor-pointer transition-colors group">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full group-hover:scale-150 transition-transform" />
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-teal p-8 rounded-[2.5rem] text-white space-y-6">
              <div className="p-3 bg-white/20 rounded-2xl w-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Mantente Informado</h4>
                <p className="text-brand-light-teal text-sm leading-relaxed">
                  Regístrate para recibir nuestro boletín con consejos de salud.
                </p>
              </div>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Tu Nombre" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input 
                  type="email" 
                  placeholder="Tu Correo" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl py-3 shadow-lg">
                  Suscribirse
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
