
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-10 inline-block relative">
              <div className="w-48 h-48 border-2 border-purple-200 rounded-full flex flex-col items-center justify-center p-6 mx-auto relative overflow-hidden group">
                <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-3xl font-serif text-purple-800 relative z-10">Amiés</h3>
                <div className="h-0.5 w-12 bg-purple-400 my-2 relative z-10"></div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-purple-500 font-bold relative z-10">Beauté et Style</p>
                <div className="absolute -bottom-2 -right-2 opacity-20">
                  <svg className="w-20 h-20 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12,2L13.5,9H12.5V12.5H16L15,11L21,12L15,13L16,11.5H12.5V16H11.5V11.5H8L9,13L3,12L9,11L8,12.5H11.5V9H10.5L12,2Z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-serif italic text-purple-900 mb-6">"Tu belleza, nuestra inspiración"</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              En Amiés, creemos que cada persona posee una belleza única. Nuestra misión es realzar tu estilo propio mediante técnicas innovadoras y un trato personalizado que te haga sentir radiante por dentro y por fuera.
            </p>
          </div>
        </section>

        <Services />
        <AIConsultant />
        <Gallery />

        {/* Floating WhatsApp Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group"
          title="Contáctanos por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
            Agendar Cita
          </span>
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default App;
