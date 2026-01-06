
import React from 'react';
import { Scissors, Sparkles, Hand, Heart } from 'lucide-react';
import { Testimonial } from './types';

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
  facebook: 'https://facebook.com/amies.style'
};

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
