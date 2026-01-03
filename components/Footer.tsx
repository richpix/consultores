import React from 'react';
import { Facebook, Instagram, Linkedin, Shield } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
               <Shield size={32} className="text-brand-blue" />
               <div className="flex flex-col leading-none">
                 <span className="font-heading font-bold text-xl">Consultores en Tecnología</span>
                 <span className="text-xs text-gray-400 tracking-widest">LRP</span>
               </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Expertos en seguridad electrónica y soluciones IT en el Caribe Mexicano. Calidad, confianza e innovación.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61563907817121" className="bg-gray-800 p-2 rounded hover:bg-brand-blue transition-colors">
                <Facebook size={20} />
              </a>             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-blue">Navegación</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-blue">Soluciones</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">CCTV y Videovigilancia</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Redes y Fibra Óptica</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Software Empresarial</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Venta de Hardware</a></li>
            </ul>
          </div>

          {/* Legal / Contact tiny */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-blue">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Aviso de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Términos y Condiciones</a></li>
            </ul>
            <div className="mt-8">
                <p className="text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Consultores LRP. <br />Todos los derechos reservados.
                </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-xs text-gray-600">
               Consultores LRP - Soluciones en Seguridad y Tecnología | Cancún, Playa del Carmen, Tulum
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;