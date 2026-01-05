
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with an overlay matching the logo vibe */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Luxury Salon"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-purple-900 leading-tight mb-4">
            Amiés <br />
            <span className="text-amiés-purple">Beauté et Style</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 font-light italic">
            Donde la elegancia se encuentra con tu estilo natural. Descubre la experiencia Amiés.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#contacto" 
              className="bg-amiés-purple text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-purple-700 transition-all transform hover:-translate-y-1"
            >
              Reserva Ahora
            </a>
            <a 
              href="#servicios" 
              className="bg-white text-amiés-purple border border-amiés-purple px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-all transform hover:-translate-y-1"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
