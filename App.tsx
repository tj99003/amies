
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { MessageCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO, SITE_CONFIG } from './constants';

const App: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/\+/g, '')}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Fondo decorativo sutil */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-2 border-purple-200 rounded-full animate-slow-rotate"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 border border-purple-100 rounded-full animate-slow-rotate" style={{ animationDirection: 'reverse' }}></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="mb-16 inline-block relative">
              
              {/* Anillo exterior giratorio punteado */}
              <div className="absolute inset-0 -m-4 border-2 border-dashed border-purple-200 rounded-full animate-slow-rotate"></div>
              
              {/* Logo Central Dinámico */}
              <div className="w-80 h-80 border border-purple-100 rounded-full flex flex-col items-center justify-center p-12 mx-auto relative overflow-hidden group shadow-2xl bg-purple-50/50 backdrop-blur-sm transition-all duration-700 hover:bg-white hover:border-purple-200">
                
                {/* Sparkles decorativos animados */}
                <Sparkles className="absolute top-12 right-12 text-amber-300 w-6 h-6 animate-pulse" />
                <Sparkles className="absolute bottom-16 left-10 text-purple-300 w-4 h-4 animate-float" />
                
                {/* Nombre con efecto de brillo y tipografía refinada */}
                <h3 className="text-7xl font-serif text-purple-900 relative z-10 tracking-tight shimmer-text transition-transform duration-700 group-hover:scale-110">
                  {SITE_CONFIG.brandName}
                </h3>
                
                {/* Línea divisoria minimalista */}
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-purple-300 to-transparent my-6 relative z-10"></div>
                
                {/* Eslogan con mayor espaciado */}
                <p className="text-xs uppercase tracking-[0.5em] text-purple-400 font-black relative z-10">
                  {SITE_CONFIG.slogan}
                </p>
                
                {/* Gráfico de fondo elegante (Brújula/Estrella) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                  <svg className="w-64 h-64 text-purple-900 animate-slow-rotate" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12,2L13,9H11L12,2M12,22L11,15H13L12,22M2,12L9,11V13L2,12M22,12L15,13V11L22,12M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5M17.66,17.66L15.54,15.54L17.66,17.66M6.34,6.34L8.46,8.46L6.34,6.34M6.34,17.66L8.46,15.54L6.34,17.66M17.66,6.34L15.54,8.46L17.66,6.34Z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="animate-float">
              <h2 className="text-5xl md:text-6xl font-serif italic text-purple-950 mb-8 leading-tight">"Tu belleza, nuestra inspiración"</h2>
              <p className="text-gray-500 leading-relaxed text-2xl max-w-2xl mx-auto font-light italic">
                Descubre el secreto de la elegancia en <span className="text-purple-800 font-bold border-b border-purple-200">{SITE_CONFIG.brandName}</span>. 
              </p>
            </div>
          </div>
        </section>

        <Services />
        <AIConsultant />
        <Gallery />

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group"
          title="Contáctanos por WhatsApp"
        >
          <MessageCircle size={32} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black whitespace-nowrap uppercase tracking-widest text-xs">
            Agendar Cita
          </span>
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default App;
