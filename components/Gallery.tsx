
import React from 'react';
import { GALLERY_CONFIG } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portafolio Amiés</h2>
          <p className="text-gray-600 italic">Inspiración real, resultados extraordinarios.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_CONFIG.media.map((item, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow group bg-purple-100">
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={`Portfolio ${idx}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 min-h-[250px]"
                />
              ) : (
                <video 
                  src={item.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 min-h-[250px]"
                />
              )}
              <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="text-white font-serif italic text-lg border-b border-white pb-1">Beauté et Style</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
