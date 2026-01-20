
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import BrandShowcase from './components/BrandShowcase';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <BrandShowcase />

        <Services />
        <AIConsultant />
        <Gallery />

        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};

export default App;
