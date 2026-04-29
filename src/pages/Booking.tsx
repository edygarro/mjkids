import { Button } from "@/src/components/ui/Button";
import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useState } from "react";

const timeSlots = ["9:00 AM", "10:30 AM", "2:00 PM", "4:15 PM", "6:00 PM"];

export default function Booking() {
  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Doctor Profile */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 sticky top-32">
              <div className="relative mb-8 rounded-[2rem] overflow-hidden aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" 
                  alt="Dra. Elena Ruiz" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-brand-teal">Dra. Elena Ruiz</h1>
                  <p className="text-slate-500 font-medium">Pediatría General y Neonatología</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Educación</h4>
                    <p className="text-sm text-slate-700">Universidad de Costa Rica</p>
                    <p className="text-sm text-slate-700">Especialidad en Hospital Nacional de Niños</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Experiencia</h4>
                    <p className="text-sm text-slate-700">Más de 15 años</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Áreas de Especialización</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Cuidado del Recién Nacido</li>
                      <li>• Desarrollo Infantil</li>
                      <li>• Vacunación</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Agenda tu Cita</h2>
              
              <div className="space-y-12">
                {/* Calendar Interface */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-4">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                      <CalendarIcon className="w-5 h-5 text-brand-teal" />
                      Octubre 2026
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-brand-light-teal rounded-full transition-colors"><ChevronLeft /></button>
                      <button className="p-2 hover:bg-brand-light-teal rounded-full transition-colors"><ChevronRight /></button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 md:gap-4 text-center">
                    {["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"].map(day => (
                      <div key={day} className="text-xs font-bold text-slate-400 uppercase pb-4">{day}</div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`
                          py-4 rounded-2xl text-sm font-semibold transition-all
                          ${day < 13 ? "text-slate-300 pointer-events-none" : "hover:bg-brand-light-teal"}
                          ${selectedDay === day ? "bg-brand-teal text-white shadow-lg shadow-brand-teal/20" : "text-slate-600"}
                          ${day >= 13 && day <= 28 ? "bg-brand-light-teal/30" : ""}
                        `}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-teal" />
                    Horario Disponible
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          px-6 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center gap-2
                          ${selectedTime === time 
                            ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20" 
                            : "bg-white border-2 border-slate-100 text-slate-600 hover:border-brand-teal"}
                        `}
                      >
                        {time} {selectedTime === time && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full py-6 text-lg rounded-[2rem] shadow-xl"
                    disabled={!selectedTime}
                  >
                    Agendar Cita con Dra. Ruiz
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
