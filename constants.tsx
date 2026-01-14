
import React from 'react';
import { Scissors, Sparkles, Hand, Heart, Star, Camera, Wand2, Flower2 } from 'lucide-react';
import { Testimonial, Service } from './types';

export const SITE_CONFIG = {
  brandName: "Amiès",
  slogan: "Beauté et Style",
  heroTitle: "Amiès",
  heroSubtitle: "Donde la belleza florece entre amigas. En Amiés queremos que te sientas cómoda, tranquila y libre de ser tú misma. Este es tu momento, tu lugar ",
  heroBadge: "Bienvenida a",
  colors: {
    primary: '#8b5cf6',
    primaryDark: '#6d28d9',
    secondary: '#d8b4fe',
    textDark: '#1e1b4b',
    textLight: '#4b5563',
    accent: '#f59e0b',
    background: '#faf5ff',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/amies_beautestyle',
    facebook: 'https://www.facebook.com/61577682820357',
    tiktok: 'https://www.tiktok.com/@amis.beaut.et.sty'
  }
};

export const FOOTER_CONFIG = {
  aboutTitle: "Sobre Amiès",
  aboutText: "Comprometidos con la excelencia y el bienestar de nuestros clientes. Amiès es más que un salón, es un espacio diseñado para reencontrarte contigo misma a través del estilo y el cuidado profesional.",
  quickLinksTitle: "Explora",
  hoursTitle: "Horarios de Atención",
  locationTitle: "Nuestra Ubicación",
  hours: [
    { day: "Lunes a Sábado", time: "9:00 am - 06:00 pm" }
  ]
};

export const COLORS = SITE_CONFIG.colors;

export const ICON_MAP: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  hand: <Hand className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  camera: <Camera className="w-6 h-6" />,
  wand: <Wand2 className="w-6 h-6" />,
  flower: <Flower2 className="w-6 h-6" />,
};

export const CONTACT_INFO = {
  phone: '6989-7889',
  whatsappNumber: '50369897829',
  whatsappMessage: 'Hola Amiès, me gustaría agendar una cita.',
  email: 'amiesbeauteetstyle@gmail.com',
  address: 'Condominio Los Héroes, Local 2k. Boulevard de Los Héroes., San Salvador, El Salvador',
  googleMaps: 'https://maps.app.goo.gl/NgG543eJNJZRzSE79',
  waze: 'https://ul.waze.com/ul?ll=13.71205953%2C-89.20725703&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
  logo: null
};

export const FALLBACK_IMAGES: Record<string, string> = {
  hero: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2000",
  gallery: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
};

export const SERVICES_DATA: Service[] = [
  {
    id: "hair",
    name: "Corte y Estilo",
    description: "Transformamos tu look con las últimas tendencias en cortes personalizados.",
    longDescription: "Nuestro equipo de estilistas expertos analiza la fisonomía de tu rostro y la textura de tu cabello para crear un diseño exclusivo. Utilizamos técnicas de vanguardia que garantizan un crecimiento sano.",
    price: "Desde $350",
    iconId: "scissors", // Debe coincidir con una clave en ICON_MAP
    image: "./images/servicios/corte.png",
    duration: "45 - 60 min",
    includes: ["Diagnóstico capilar", "Masaje craneal", "Corte de precisión", "Peinado final"]
  },
  {
    id: "color",
    name: "Colorimetría",
    description: "Balayage, luces y tintes con productos de alta gama que cuidan tu cabello.",
    longDescription: "Especialistas en la creación de matices y dimensiones. Protegemos la integridad de tu fibra capilar con tratamientos de enlace integrados.",
    price: "Desde $1,200",
    iconId: "sparkles",
    image: "./images/servicios/color.png",
    duration: "2 - 4 horas",
    includes: ["Prueba de mechón", "Coloración premium", "Tratamiento de brillo"]
  },
  {
    id: "nails",
    name: "Manicura y Pedicura",
    description: "Cuidado experto para tus manos y pies con acabados impecables.",
    longDescription: "Una experiencia de spa completa. Utilizamos esmaltes de larga duración libres de tóxicos y técnicas de limpieza profunda.",
    price: "Desde $250",
    iconId: "hand",
    image: "./images/servicios/unas.png",
    duration: "40 - 90 min",
    includes: ["Exfoliación", "Limpieza de cutícula", "Esmaltado en gel", "Hidratación"]
  },
  {
    id: "skincare",
    name: "Cuidado Facial",
    description: "Tratamientos hidratantes y rejuvenecedores para tu piel.",
    longDescription: "Protocolos faciales diseñados para restaurar la luminosidad y vitalidad. Combinamos dermo-cosmética de lujo.",
    price: "Desde $800",
    iconId: "heart",
    image: "./images/servicios/facial.png",
    duration: "60 - 75 min",
    includes: ["Doble limpieza", "Exfoliación enzimática", "Mascarilla adaptada", "Masaje facial"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana G.',
    text: 'Amiès es mi lugar favorito. La atención es impecable.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=mariana'
  },
  {
    id: '2',
    name: 'Carla L.',
    text: 'El mejor balayage que me han hecho. Muy profesionales.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=carla'
  }
];
