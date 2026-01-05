
import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Scissors } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-purple-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Scissors className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold">Amiés</span>
            </div>
            <p className="text-purple-200 leading-relaxed mb-6">
              Comprometidos con la excelencia y el bienestar de nuestros clientes. Amiés es más que un salón, es un espacio para reencontrarte contigo misma.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-purple-200">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
              <li><a href="#ai" className="hover:text-white transition-colors">Consultora AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Horarios</h4>
            <ul className="space-y-4 text-purple-200">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="italic">Cerrado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Ubicación</h4>
            <ul className="space-y-4 text-purple-200">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <span>Av. de las Rosas 123, <br />Ciudad de Belleza, CP 45000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span>hola@amies.style</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300">
          <p>© {new Date().getFullYear()} Amiés - Beauté et Style. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
