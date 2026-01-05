
import React from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1527799822341-47100b3d6517?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portafolio Amiés</h2>
          <p className="text-gray-600 italic">Inspiración real, resultados extraordinarios.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow group">
              <img 
                src={img} 
                alt={`Portfolio ${idx}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
