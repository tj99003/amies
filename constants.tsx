
import React from 'react';
import { Scissors, Sparkles, Hand, Heart, Star, Camera, Wand2, Flower2, Palette, Eye, PenTool } from 'lucide-react';
import { Testimonial, Service } from './types';

export const SITE_CONFIG = {
  brandName: "Amiès",
  slogan: "Beauté et Style",
  heroTitle: "Amiès",
  heroSubtitle: <>Donde la belleza florece entre amigas.<br />En Amiés queremos que te sientas cómoda, tranquila y libre de ser tú misma. Este es tu momento, tu lugar </>,
  heroBadge: "Bienvenida a",
  colors: {
    primary: '#B794F4',     // Lavanda suave (Delicado y femenino)
    primaryDark: '#9F7AEA', // Un tono más intenso para interacciones
    secondary: '#E9D8FD',   // Fondo secundario muy suave
    textDark: '#4A306D',    // Texto oscuro (Berenjena profundo, más suave que el negro)
    textLight: '#718096',   // Gris neutro para textos secundarios
    accent: '#D4AF37',      // Dorado metálico (Elegancia y lujo)
    background: '#FFFCF9',  // Blanco cálido / Marfil (Más acogedor que el blanco puro)
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/amies_beautestyle',
    facebook: 'https://www.facebook.com/61577682820357',
    tiktok: 'https://www.tiktok.com/@amis.beaut.et.sty'
  }
};

export const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export const FOOTER_CONFIG = {
  aboutTitle: "Sobre Amiès",
  aboutText: "Comprometidos con la excelencia y el bienestar de nuestros clientes. Amiès es más que un salón, es un espacio diseñado para reencontrarte contigo misma a través del estilo y el cuidado profesional.",
  quickLinksTitle: "Explora",
  quickLinks: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' }
  ],
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
  palette: <Palette className="w-6 h-6" />,
  eye: <Eye className="w-6 h-6" />,
  'pen-tool': <PenTool className="w-6 h-6" />,
};

export const CONTACT_INFO = {
  phone: '6989-7889',
  whatsappNumber: '50369897829',
  whatsappMessage: 'Hola Amiès, me gustaría agendar una cita.',
  email: 'amiesbeauteetstyle@gmail.com',
  address: 'Condominio Los Héroes, Local 2k. Boulevard de Los Héroes., San Salvador, El Salvador',
  googleMaps: 'https://maps.app.goo.gl/NgG543eJNJZRzSE79',
  waze: 'https://ul.waze.com/ul?ll=13.71205953%2C-89.20725703&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
  logo: '/logo.jpg' // Ruta al archivo en la carpeta public
};

export const FALLBACK_IMAGES: Record<string, string> = {
  hero: "/images/lookbook/image_2.jpeg",
  gallery: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
};

export const SERVICES_DATA: Service[] = [
    {
        id: "cabello",
        name: "Cabina de Cabello",
        description: "Expertos en color y cuidado capilar.",
        longDescription: "Desde tintes tradicionales y fantasía hasta alisados y tratamientos intensivos. Nuestros estilistas te ayudarán a encontrar el look perfecto que resalte tu belleza natural y cuide la salud de tu cabello.",
        price: "",
        iconId: "scissors",
        image: "/images/servicios/color.png",
        duration: "Variable",
        includes: [
            "Tintes (tradicionales y fantasía)",
            "Alisados",
            "Cortes",
            "Peinados",
            "Tratamientos intensivos",
            "Repolarización capilar"
        ]
    },
    {
        id: "unas",
        name: "Uñas",
        description: "Diseños únicos y cuidado profesional.",
        longDescription: "Luce unas manos espectaculares con nuestros servicios de uñas. Ofrecemos desde uñas acrílicas y softgel hasta esmaltado permanente con diseños creativos y elegantes.",
        price: "",
        iconId: "palette",
        image: "/images/servicios/unas.png",
        duration: "Variable",
        includes: [
            "Uñas acrílicas",
            "Uñas softgel",
            "Baño de acrílico",
            "Esmaltado permanente",
            "Aplicación de rubber"
        ]
    },
    {
        id: "manos-pies",
        name: "Manos & Pies",
        description: "Relax y bienestar para tus extremidades.",
        longDescription: "Relájate con nuestros tratamientos de spa para manos y pies. Desde manicure y pedicure clínico hasta masajes de reflexología podal para un bienestar completo.",
        price: "",
        iconId: "hand",
        image: "/images/lookbook/image_10.jpeg",
        duration: "Variable",
        includes: [
            "Manicure spa",
            "Manicure spa con masaje de reflexología",
            "Pedicure clínico",
            "Pedicure spa",
            "Masaje de reflexología podal",
            "Acripie"
        ]
    },
    {
        id: "pestanas",
        name: "Pestañas",
        description: "Realza tu mirada con naturalidad.",
        longDescription: "Consigue una mirada de impacto con nuestros servicios de pestañas. Ofrecemos extensiones para más volumen y lifting para una curvatura natural y duradera.",
        price: "",
        iconId: "eye",
        image: "/images/servicios/pesta.jpeg",
        duration: "Variable",
        includes: [
            "Extensiones de pestañas",
            "Lifting de pestañas",
            "Lifting de pestañas + tinte"
        ]
    },
    {
        id: "cejas",
        name: "Cejas",
        description: "Marco perfecto para tu rostro.",
        longDescription: "Define y perfecciona tus cejas con nuestros servicios de diseño, laminado y pigmentación. Unas cejas bien cuidadas son el marco perfecto para tu rostro.",
        price: "",
        iconId: "pen-tool",
        image: "/images/servicios/cejas.jpeg",
        duration: "Variable",
        includes: [
            "Diseño de cejas",
            "Laminado de cejas",
            "Pigmentación de cejas"
        ]
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

export const GALLERY_CONFIG = {
  media: [
    { type: 'image', src: '/images/lookbook/image_1.jpeg' },
    { type: 'image', src: '/images/lookbook/image_2.jpeg' },
    { type: 'image', src: '/images/lookbook/image_3.jpeg' },
    { type: 'video', src: '/images/lookbook/video_1.mp4' },
    { type: 'image', src: '/images/lookbook/image_4.jpeg' },
    { type: 'image', src: '/images/lookbook/image_5.jpeg' },
    { type: 'image', src: '/images/lookbook/image_6.jpeg' },
    { type: 'video', src: '/images/lookbook/video_2.mp4' },
    { type: 'image', src: '/images/lookbook/image_7.jpeg' },
    { type: 'image', src: '/images/lookbook/image_8.jpeg' },
    { type: 'image', src: '/images/lookbook/image_9.jpeg' },
    { type: 'video', src: '/images/lookbook/video_3.mp4' },
    { type: 'image', src: '/images/lookbook/image_10.jpeg' },
    { type: 'image', src: '/images/lookbook/image_11.jpeg' },
    { type: 'image', src: '/images/lookbook/image_12.jpeg' },
    { type: 'video', src: '/images/lookbook/video_4.mp4' },
    { type: 'image', src: '/images/lookbook/image_13.jpeg' },
    { type: 'image', src: '/images/lookbook/image_14.jpeg' },
    { type: 'image', src: '/images/lookbook/image_15.jpeg' },
    { type: 'image', src: '/images/lookbook/image_16.jpeg' },
    { type: 'image', src: '/images/lookbook/image_17.jpeg' },
  ]
};
