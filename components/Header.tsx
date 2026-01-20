
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO, SITE_CONFIG, NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
        : 'bg-white/30 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo insignia con borde dorado sutil */}
            <div className={`transition-all duration-700 bg-purple-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-amber-200/50 shadow-lg relative group ${
              isScrolled ? 'w-14 h-14' : 'w-18 h-18'
            }`}>
              {/* Brillo reflectante */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className={`font-serif font-bold text-white transition-all duration-300 ${
                isScrolled ? 'text-base' : 'text-lg'
              }`}>
                {SITE_CONFIG.brandName}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-300 hover:scale-110 relative group ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-purple-900 hover:text-purple-600'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors uppercase tracking-widest"
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
