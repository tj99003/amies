
import React from 'react';
import { Scissors, Sparkles, Hand, Heart } from 'lucide-react';
import { Testimonial, Service } from './types';

export const COLORS = {
  primary: '#8b5cf6',
  secondary: '#d8b4fe',
  accent: '#f59e0b',
  background: '#faf5ff',
};

// Mapa para convertir strings del JSON en componentes de Lucide
export const ICON_MAP: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  hand: <Hand className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
};

export const CONTACT_INFO = {
  phone: '+525512345678',
  whatsappMessage: 'Hola Amiés, me gustaría agendar una cita.',
  email: 'hola@amies.style',
  address: 'Av. de las Rosas 123, Ciudad de Belleza, CP 45000',
  instagram: 'https://instagram.com/amies.style',
  facebook: 'https://facebook.com/amies.style',
  logo: './images/brand/logo.png'
};

// Fallbacks de alta calidad para cuando las imágenes locales no existan (Preview mode)
export const FALLBACK_IMAGES: Record<string, string> = {
  hero: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000",
  hair: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
  color: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
  nails: "https://images.unsplash.com/photo-1604654894610-df490998700d?auto=format&fit=crop&q=80&w=800",
  skincare: "https://images.unsplash.com/photo-1570172619240-39499899f193?auto=format&fit=crop&q=80&w=800",
  gallery: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
};

export const SERVICES_DATA: Service[] = [
  {
    "id": "hair",
    "name": "Corte y Estilo",
    "description": "Transformamos tu look con las últimas tendencias en cortes y peinados personalizados.",
    "price": "Desde $350",
    "iconId": "scissors",
    "image": "./images/servicios/corte.png"
  },
  {
    "id": "color",
    "name": "Colorimetría",
    "description": "Balayage, luces y tintes con productos de alta gama que cuidan tu cabello.",
    "price": "Desde $1,200",
    "iconId": "sparkles",
    "image": "./images/servicios/color.png"
  },
  {
    "id": "nails",
    "name": "Manicura y Pedicura",
    "description": "Cuidado experto para tus manos y pies con acabados impecables y duraderos.",
    "price": "Desde $250",
    "iconId": "hand",
    "image": "./images/servicios/unas.png"
  },
  {
    "id": "skincare",
    "name": "Cuidado Facial",
    "description": "Tratamientos hidratantes y rejuvenecedores para resaltar tu belleza natural.",
    "price": "Desde $800",
    "iconId": "heart",
    "image": "./images/servicios/facial.png"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana G.',
    text: 'Amiés es mi lugar favorito. La atención es impecable y siempre salgo sintiéndome renovada.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=mariana'
  },
  {
    id: '2',
    name: 'Carla L.',
    text: 'El mejor balayage que me han hecho. Entendieron exactamente lo que quería.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=carla'
  },
  {
    id: '3',
    name: 'Sofía R.',
    text: 'Excelente servicio de uñas. Muy profesionales y el ambiente es súper relajante.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=sofia'
  }
];
