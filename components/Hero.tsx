
import React, { useState } from 'react';
import { FALLBACK_IMAGES, SITE_CONFIG } from '../constants';

const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(FALLBACK_IMAGES.hero);

  return (
    <section id="inicio" className="relative h-[90vh] md:h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-purple-50">
        <img 
          src={imgSrc} 
          className="w-full h-full object-cover" 
          alt="Luxury Salon"
          onError={() => setImgSrc(FALLBACK_IMAGES.hero)}
        />
        {/* Capas de gradiente para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/90 via-purple-50/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-lg shadow-purple-200 animate-fade-in">
            {SITE_CONFIG.heroBadge}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-purple-900 leading-none mb-6 drop-shadow-sm">
            {SITE_CONFIG.heroTitle} <br />
            <span className="text-amiés-purple italic font-serif text-4xl md:text-6xl block mt-2">
              {SITE_CONFIG.slogan}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-10 font-medium leading-relaxed max-w-xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            {SITE_CONFIG.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contacto" 
              className="bg-amiés-purple text-white px-10 py-5 rounded-full font-black shadow-2xl hover:bg-purple-700 transition-all transform hover:-translate-y-1 text-center tracking-widest uppercase text-xs"
            >
              Reserva tu Cita
            </a>
            <a 
              href="#servicios" 
              className="bg-white/90 backdrop-blur-sm text-amiés-purple border-2 border-amiés-purple px-10 py-5 rounded-full font-black hover:bg-white transition-all transform hover:-translate-y-1 text-center tracking-widest uppercase text-xs"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block">
        <a href="#servicios" className="text-amiés-purple p-2 bg-white/50 backdrop-blur rounded-full shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
