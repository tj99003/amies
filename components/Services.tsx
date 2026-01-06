
import React, { useState } from 'react';
import { X, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { ICON_MAP, SERVICES_DATA, CONTACT_INFO } from '../constants';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBook = (serviceName: string) => {
    const message = `Hola Amiés, me interesa agendar el servicio de: ${serviceName}.`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-amiés-purple mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Realza tu belleza con nuestros tratamientos especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id} 
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-amiés-purple">
                    {ICON_MAP[service.iconId] || ICON_MAP.sparkles}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-amiés-purple font-bold">{service.price}</span>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-purple-600 transition-colors"
                  >
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full text-gray-500 hover:text-purple-600 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-full">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">{selectedService.name}</h3>
                <p className="text-amiés-purple font-bold text-lg mb-4">{selectedService.price}</p>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Duración: {selectedService.duration || 'N/A'}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {selectedService.longDescription || selectedService.description}
                </p>

                {selectedService.includes && (
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-800 mb-3 text-sm">Incluye:</h4>
                    <ul className="space-y-2">
                      {selectedService.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button 
                  onClick={() => handleBook(selectedService.name)}
                  className="w-full bg-amiés-purple text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-700 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Cita
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
