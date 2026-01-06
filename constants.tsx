
import React from 'react';
import { Scissors, Sparkles, Hand, Heart, Star, Camera, Wand2, Flower2 } from 'lucide-react';
import { Testimonial, Service } from './types';

export const SITE_CONFIG = {
  brandName: "Amiés",
  slogan: "Beauté et Style",
  heroTitle: "Amiés",
  heroSubtitle: "Donde la elegancia francesa se encuentra con tu estilo natural. Descubre la experiencia Amiés y transforma tu imagen.",
  heroBadge: "Bienvenida a la Excelencia",
  colors: {
    primary: '#8b5cf6',
    primaryDark: '#6d28d9',
    secondary: '#d8b4fe',
    textDark: '#1e1b4b',
    textLight: '#4b5563',
    accent: '#f59e0b',
    background: '#faf5ff',
  },
  header: {
    transparentAtTop: true,
    blurStrength: 'backdrop-blur-md',
    textColorAtTop: 'text-purple-900',
  },
  socialLinks: {
    instagram: 'https://instagram.com/amies.style',
    facebook: 'https://facebook.com/amies.style',
    x: 'https://x.com/amies_style'
  }
};

export const COLORS = SITE_CONFIG.colors;

// --- DICCIONARIO DE ICONOS ---
// Si quieres usar un icono nuevo, asegúrate de que esté en esta lista.
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
  phone: '+525512345678',
  whatsappMessage: 'Hola Amiés, me gustaría agendar una cita.',
  email: 'hola@amies.style',
  address: 'Av. de las Rosas 123, Ciudad de Belleza, CP 45000',
  googleMaps: 'https://maps.google.com/?q=Av.+de+las+Rosas+123+Ciudad+de+Belleza',
  waze: 'https://waze.com/ul?q=Av.+de+las+Rosas+123+Ciudad+de+Belleza',
  logo: null 
};

export const FALLBACK_IMAGES: Record<string, string> = {
  hero: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2000",
  gallery: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
};

// --- CONFIGURACIÓN DE SERVICIOS ---
// Para agregar un servicio: 
// 1. Añade la imagen a tu carpeta o usa una URL de Unsplash.
// 2. Crea un nuevo objeto {} en esta lista.
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
  // ¿Quieres agregar otro? Copia el bloque de arriba aquí abajo.
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana G.',
    text: 'Amiés es mi lugar favorito. La atención es impecable.',
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
