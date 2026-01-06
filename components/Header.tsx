
import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { CONTACT_INFO, SITE_CONFIG } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Consultora AI', href: '#ai' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const logoSrc = CONTACT_INFO.logo;
  const showLogoImage = logoSrc && !logoError;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
        : 'bg-white/30 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center overflow-hidden border border-purple-200 shadow-sm">
              {showLogoImage ? (
                <img 
                  src={logoSrc} 
                  alt="Logo" 
                  className="w-full h-full object-contain p-1"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Scissors className="text-white w-6 h-6" />
              )}
            </div>
            <span className="text-2xl font-serif font-bold text-purple-900">
              {SITE_CONFIG.brandName}
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-600 hover:text-purple-600' : 'text-purple-900 hover:text-purple-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-lg text-purple-900"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
