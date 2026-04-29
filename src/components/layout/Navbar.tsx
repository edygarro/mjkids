import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Stethoscope, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Especialidades', href: '/especialidades' },
  { name: 'Especialistas', href: '/especialistas' },
  { name: 'Blog', href: '/blog' },
  { name: 'Opiniones', href: '/opiniones' },
  { name: 'Contacto', href: '/contacto' },
  { name: 'Portal', href: '/dashboard' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full glass-morphism border-b border-brand-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-teal p-1.5 rounded-lg">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-brand-teal leading-none">M&J <span className="text-brand-green">Kids</span></span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Pediátrica y Familiar</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-teal",
                  location.pathname === link.href ? "text-brand-teal" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/agenda"
              className="bg-brand-teal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-teal/90 transition-all shadow-md shadow-brand-teal/20"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-teal p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-teal/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.href ? "bg-brand-light-teal text-brand-teal" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/agenda"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-teal text-white px-6 py-3 rounded-xl text-base font-semibold mt-4"
              >
                Agendar Cita
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
