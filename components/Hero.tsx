
import React, { useState } from 'react';
import { FALLBACK_IMAGES, SITE_CONFIG } from '../constants';

const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(FALLBACK_IMAGES.hero);

  return (
    <section id="inicio" className="relative min-h-[65vh] md:min-h-[70vh] flex items-center overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 z-0 bg-purple-50">
        <img 
          src={imgSrc} 
          className="w-full h-full object-cover" 
          alt="Luxury Salon"
          onError={() => setImgSrc(FALLBACK_IMAGES.hero)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/90 via-purple-50/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-lg shadow-purple-200">
            {SITE_CONFIG.heroBadge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-purple-900 leading-none mb-6 drop-shadow-sm">
            {SITE_CONFIG.heroTitle} <br />
            <span className="text-amiés-purple italic font-serif text-3xl md:text-5xl block mt-2">
              {SITE_CONFIG.slogan}
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-800 mb-8 font-medium leading-relaxed max-w-lg drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            {SITE_CONFIG.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contacto" 
              className="bg-amiés-purple text-white px-8 py-4 rounded-full font-black shadow-xl hover:bg-purple-700 transition-all transform hover:-translate-y-1 text-center tracking-widest uppercase text-[10px]"
            >
              Reserva tu Cita
            </a>
            <a 
              href="#servicios" 
              className="bg-white/90 backdrop-blur-sm text-amiés-purple border-2 border-amiés-purple px-8 py-4 rounded-full font-black hover:bg-white transition-all transform hover:-translate-y-1 text-center tracking-widest uppercase text-[10px]"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
