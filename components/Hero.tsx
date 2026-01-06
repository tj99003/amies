
import React, { useState } from 'react';
import { FALLBACK_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("./images/brand/hero.png");

  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-purple-100">
        <img 
          src={imgSrc} 
          className="w-full h-full object-cover" 
          alt="Luxury Salon"
          onError={() => {
            if (imgSrc !== FALLBACK_IMAGES.hero) {
              setImgSrc(FALLBACK_IMAGES.hero);
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/95 via-purple-100/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 bg-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Bienvenida a la Excelencia
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-purple-900 leading-tight mb-4">
            Amiés <br />
            <span className="text-amiés-purple">Beauté et Style</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 font-light italic leading-relaxed">
            Donde la elegancia francesa se encuentra con tu estilo natural. Descubre la experiencia Amiés y transforma tu imagen.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contacto" 
              className="bg-amiés-purple text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-purple-700 transition-all transform hover:-translate-y-1 text-center"
            >
              Reserva tu Cita
            </a>
            <a 
              href="#servicios" 
              className="bg-white/80 backdrop-blur-sm text-amiés-purple border border-amiés-purple px-8 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:-translate-y-1 text-center"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <a href="#servicios" className="text-amiés-purple">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
