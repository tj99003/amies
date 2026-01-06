
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Scissors, Navigation } from 'lucide-react';
import { SITE_CONFIG, CONTACT_INFO, FOOTER_CONFIG } from '../constants';

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-purple-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                <Scissors className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold">{SITE_CONFIG.brandName}</span>
            </div>
            <p className="text-purple-200 leading-relaxed mb-6 text-sm">
              {FOOTER_CONFIG.aboutText}
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href={SITE_CONFIG.socialLinks.x} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <XIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{FOOTER_CONFIG.quickLinksTitle}</h4>
            <ul className="space-y-4 text-purple-200 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
              <li><a href="#ai" className="hover:text-white transition-colors">Consultora AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{FOOTER_CONFIG.hoursTitle}</h4>
            <ul className="space-y-4 text-purple-200 text-sm">
              {FOOTER_CONFIG.hours.map((h, i) => (
                <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                  <span>{h.day}:</span>
                  <span className={h.time === "Cerrado" ? "italic opacity-60" : "font-bold"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{FOOTER_CONFIG.locationTitle}</h4>
            <ul className="space-y-4 text-purple-200 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 flex-shrink-0 text-purple-400" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="pt-2">
                <p className="text-[10px] uppercase font-bold tracking-widest text-purple-400 mb-3">Navegación Directa</p>
                <div className="flex flex-wrap gap-2">
                   <a 
                    href={CONTACT_INFO.googleMaps} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs bg-white/5 hover:bg-white/15 px-3 py-2 rounded-lg transition-all border border-white/10"
                   >
                     <img src="https://www.gstatic.com/images/branding/product/2x/maps_96in128dp.png" className="w-4 h-4" alt="Maps" />
                     Maps
                   </a>
                   <a 
                    href={CONTACT_INFO.waze} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs bg-white/5 hover:bg-white/15 px-3 py-2 rounded-lg transition-all border border-white/10"
                   >
                     <Navigation size={14} className="text-blue-400" />
                     Waze
                   </a>
                </div>
              </li>
              <li className="flex items-center space-x-3 pt-4">
                <Phone size={18} className="text-purple-400" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-400" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-purple-300">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName} - {SITE_CONFIG.slogan}.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
