import { motion } from "motion/react";
import { 
  Calendar as CalendarIcon, 
  History, 
  ClipboardList, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Sun, 
  Apple, 
  ShieldAlert,
  ChevronRight,
  Plus,
  Bell,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

const sidebarLinks = [
  { icon: CalendarIcon, label: 'Citas', active: true },
  { icon: History, label: 'Historial Médico' },
  { icon: ClipboardList, label: 'Resultados' },
  { icon: MessageSquare, label: 'Mensajes' },
  { icon: Settings, label: 'Ajustes' },
];

const healthTips = [
  { 
    icon: Sun, 
    title: "Seguridad Solar para Niños", 
    desc: "Asegúrese de que sus hijos usen protector solar y sombreros cuando salgan a jugar al aire libre.",
    color: "bg-orange-50 text-orange-600"
  },
  { 
    icon: Apple, 
    title: "Ideas de Meriendas Saludables", 
    desc: "Las frutas frescas y los frutos secos son excelentes opciones nutritivas para la merienda.",
    color: "bg-green-50 text-green-600"
  },
  { 
    icon: ShieldAlert, 
    title: "Precauciones para la Gripe", 
    desc: "La temporada de gripe está cerca. Lave sus manos con frecuencia y use mascarilla.",
    color: "bg-blue-50 text-blue-600"
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Citas');

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-80 bg-brand-teal text-white flex flex-col p-8 rounded-r-[3rem] shadow-2xl z-30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
        
        <div className="space-y-12 flex-grow relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl">
              <Plus className="text-brand-teal w-6 h-6 rotate-45" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight leading-none uppercase">M&J <span className="text-brand-orange">Kids</span></h2>
              <p className="text-[10px] text-white/60 font-medium tracking-[0.2em] uppercase">Nicoya, Guanacaste</p>
            </div>
          </Link>

          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-3xl backdrop-blur-sm border border-white/10">
            <img src="https://i.pravatar.cc/150?u=maria" className="w-14 h-14 rounded-2xl border-2 border-brand-orange" />
            <div>
              <p className="text-sm font-bold">María José</p>
              <p className="text-[10px] text-white/50 font-medium uppercase tracking-wider">Mamá de Mateo</p>
            </div>
          </div>

          <nav className="space-y-2">
            {sidebarLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveTab(link.label)}
                className={cn(
                  "w-full flex items-center gap-4 py-4 px-6 rounded-2xl transition-all font-semibold text-sm group",
                  activeTab === link.label 
                    ? "bg-brand-orange text-white shadow-xl shadow-brand-orange/20 translate-x-2" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <link.icon className={cn("w-5 h-5", activeTab === link.label ? "text-white" : "text-white/40 group-hover:text-white")} />
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <button className="flex items-center gap-4 py-4 px-6 text-white/60 font-semibold text-sm hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto p-12 bg-[#fdfaf5]">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-brand-teal leading-tight">
              ¡Bienvenido de nuevo,<br />
              <span className="text-slate-900">María José!</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-brand-teal transition-all">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-brand-teal transition-all">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Calendar & Next Session */}
          <div className="xl:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl shadow-brand-teal/5 border border-slate-50"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-bold text-slate-900">Septiembre 2026</h3>
                <div className="flex gap-2">
                   <button className="p-2 bg-slate-50 rounded-lg"><ChevronRight className="rotate-180 w-4 h-4" /></button>
                   <button className="p-2 bg-slate-50 rounded-lg"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-4 text-center">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="text-xs font-bold text-slate-300 uppercase">{d}</div>)}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-2xl text-sm font-bold transition-all cursor-pointer",
                      i + 1 === 15 ? "bg-brand-teal text-white shadow-lg" : "hover:bg-brand-light-teal text-slate-600"
                    )}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Próximas Citas</h3>
              <motion.div 
                 whileHover={{ scale: 1.01 }}
                 className="bg-brand-teal/5 border border-brand-teal/10 p-8 rounded-[2.5rem] flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-white p-4 rounded-3xl text-center shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase">Oct</p>
                    <p className="text-2xl font-black text-brand-teal">15</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Chequeo con el Dr. Ramírez</h4>
                    <p className="text-sm text-slate-500">Oct 15, 10:00 AM • Consultorio 4</p>
                  </div>
                </div>
                <ChevronRight className="text-brand-teal group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </div>
          </div>

          {/* Tips Sidebar */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-900">Consejos de Salud</h3>
            <div className="space-y-4">
              {healthTips.map((tip, idx) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex gap-4 group hover:shadow-md transition-all"
                >
                  <div className={cn("p-4 rounded-2xl h-fit", tip.color)}>
                    <tip.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm">{tip.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{tip.desc}</p>
                    <button className="text-[10px] font-bold text-brand-teal uppercase tracking-widest pt-2">Leer más</button>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="w-full bg-brand-orange p-10 rounded-[3rem] text-left text-white relative overflow-hidden group shadow-2xl shadow-brand-orange/20">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-125 transition-transform duration-500">
                <CalendarIcon className="w-24 h-24 rotate-12" />
              </div>
              <div className="relative z-10 space-y-4">
                <p className="text-sm font-bold text-white/70 uppercase tracking-[0.2em]">Reserva hoy</p>
                <h4 className="text-2xl font-bold">Agendar una<br />Nueva Sesión</h4>
                <div className="w-12 h-1.5 bg-white rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
