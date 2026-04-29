import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-teal p-1.5 rounded-lg">
                <Stethoscope className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white leading-none">M&J <span className="text-brand-green">Kids</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Clínica pediátrica y familiar comprometida con el bienestar integral de los más pequeños en Nicoya, Guanacaste.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-teal transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-teal transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-teal transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/especialidades" className="hover:text-brand-teal transition-colors">Especialidades</Link></li>
              <li><Link to="/especialistas" className="hover:text-brand-teal transition-colors">Directorio Médico</Link></li>
              <li><Link to="/blog" className="hover:text-brand-teal transition-colors">Consejos de Salud</Link></li>
              <li><Link to="/opiniones" className="hover:text-brand-teal transition-colors">Opiniones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0" />
                <span>100mt al oeste y 50mt al sur de la plazoleta del parque, Nicoya, Guanacaste</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <span>(506) 8868-9103</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <span>info@mjkids.com</span>
              </li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h4 className="text-white font-semibold mb-6">Descarga nuestra App</h4>
            <div className="space-y-3">
              <a href="#" className="block px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-brand-teal transition-all group">
                <div className="flex items-center gap-3">
                  <Youtube className="w-6 h-6 text-slate-400 group-hover:text-brand-teal" />
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">Download on the</div>
                    <div className="text-sm font-bold text-white">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-brand-teal transition-all group">
                <div className="flex items-center gap-3">
                  <Youtube className="w-6 h-6 text-slate-400 group-hover:text-brand-teal" />
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">Get it on</div>
                    <div className="text-sm font-bold text-white">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} M&J Kids Clínica Pediátrica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
