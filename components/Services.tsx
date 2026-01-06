
import React, { useState, useEffect } from 'react';
import { ICON_MAP } from '../constants';
import { Service } from '../types';
import { Loader2 } from 'lucide-react';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('./services.json');
        if (!response.ok) throw new Error('No se pudieron cargar los servicios');
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError('Error al cargar la lista de servicios.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 text-amiés-purple animate-spin mb-4" />
        <p className="text-gray-500 italic">Cargando servicios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 text-center bg-white">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-amiés-purple mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios de belleza diseñados para realzar tu estilo personal con el cuidado que te mereces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-amiés-purple">
                    {ICON_MAP[service.iconId] || ICON_MAP.sparkles}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-amiés-purple font-bold">{service.price}</span>
                  <button className="text-xs uppercase tracking-widest font-bold text-gray-400 group-hover:text-amiés-purple transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
