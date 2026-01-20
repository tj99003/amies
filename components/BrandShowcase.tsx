import React from 'react';
import { Sparkles } from 'lucide-react';
import { SITE_CONFIG, CONTACT_INFO } from '../constants';

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: SITE_CONFIG.colors.background }}>
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-purple-200 rounded-full animate-slow-rotate"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-purple-100 rounded-full animate-slow-rotate" style={{ animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-16 inline-block relative">

          {/* Anillo exterior giratorio punteado */}
          <div className="absolute inset-0 -m-4 border-2 border-dashed border-purple-200 rounded-full animate-slow-rotate"></div>

          {/* Contenedor Central del Logo */}
          <div className="w-80 h-80 border border-purple-100 rounded-full flex flex-col items-center justify-center p-2 mx-auto relative overflow-hidden group shadow-2xl bg-white transition-all duration-700 hover:border-purple-200">
            
            {/* Sparkles decorativos animados */}
            <Sparkles className="absolute top-8 right-8 text-amber-300 w-6 h-6 animate-pulse z-20" />
            <Sparkles className="absolute bottom-10 left-8 text-purple-300 w-4 h-4 animate-float z-20" />

            {CONTACT_INFO.logo ? (
              <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-white flex items-center justify-center">
                 <img 
                  src={CONTACT_INFO.logo} 
                  alt={`Logo de ${SITE_CONFIG.brandName}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ) : (
              /* Fallback de texto si no hay logo */
              <div className="flex flex-col items-center justify-center p-8">
                <h3 className="text-7xl font-serif text-purple-900 relative z-10 tracking-tight shimmer-text">
                  {SITE_CONFIG.brandName}
                </h3>
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-purple-300 to-transparent my-6 relative z-10"></div>
                <p className="text-xs uppercase tracking-[0.5em] text-purple-400 font-black relative z-10">
                  {SITE_CONFIG.slogan}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="animate-float">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-8 leading-tight" style={{ color: SITE_CONFIG.colors.textDark }}>
            "Tu belleza, nuestra inspiración"
          </h2>
          <p className="leading-relaxed text-2xl max-w-2xl mx-auto font-light italic" style={{ color: SITE_CONFIG.colors.textLight }}>
            Descubre el secreto de la elegancia en <span className="font-bold border-b border-purple-200" style={{ color: SITE_CONFIG.colors.primaryDark }}>{SITE_CONFIG.brandName}</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;