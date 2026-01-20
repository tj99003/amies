import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${CONTACT_INFO.whatsappNumber}&text=${encodeURIComponent(CONTACT_INFO.whatsappMessage).replace(/%20/g, '+')}&type=phone_number&app_absent=0`;

  return (
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
  );
};

export default WhatsAppButton;
