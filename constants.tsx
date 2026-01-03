import { ShieldCheck, Wifi, Cpu, Monitor, MapPin, Mail, Phone, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { ServiceItem, FAQItem, NewsItem, NavItem } from "./types";
import newsData from './pages/data/new.json';

export const COMPANY_INFO = {
  name: "Consultores LRP",
  phone: "+52 984 452 2419",
  email: "consultoreslrp@gmail.com",
  whatsappUrl: "https://wa.me/9844522419",
  locations: ["Cancún", "Playa del Carmen", "Tulum"],
  mission: "Brindar soluciones tecnológicas confiables en seguridad, conectividad y software, pymes (pequeñas y medianas empresas) y particulares a optimizar su entorno digital.",
  vision: "Ser la empresa líder en Quintana Roo en instalación de sistemas de seguridad y soluciones tecnológicas, reconocida por la innovación y el servicio al cliente."
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "#about" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Seguridad Electrónica",
    description: "Protegemos lo que más te importa con tecnología de punta.",
    items: ["Instalación de CCTV", "Mantenimiento preventivo", "GPS Vehicular", "Control de acceso"],
    icon: ShieldCheck,
    highlight: true
  },
  {
    title: "Conectividad y Redes",
    description: "Soluciones robustas para mantener tu negocio siempre en línea.",
    items: ["Instalación de Fibra Óptica", "Cableado estructurado", "Configuración de redes WiFi", "Enlaces punto a punto"],
    icon: Wifi
  },
  {
    title: "Software Empresarial",
    description: "Herramientas digitales para optimizar tu productividad.",
    items: ["Licencias Office365", "Soporte CONTPAQi", "AutoCAD", "Antivirus Corporativo"],
    icon: Cpu
  },
  {
    title: "Hardware y Equipo",
    description: "Venta y configuración de equipos de alto rendimiento.",
    items: ["Computadoras y Laptops", "Impresoras y Plotters", "Pantallas y Monitores", "Componentes (RAM/GPU)"],
    icon: Monitor
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿En qué zonas ofrecen servicio?",
    answer: "Nuestra cobertura principal abarca Cancún, Playa del Carmen y Tulum. También podemos evaluar proyectos especiales en zonas aledañas de la Riviera Maya."
  },
  {
    question: "¿Ofrecen garantía en sus instalaciones?",
    answer: "Sí, todas nuestras instalaciones de CCTV y redes cuentan con garantía de servicio, además de la garantía de fábrica de los equipos instalados."
  },
  {
    question: "¿Dan soporte a sistemas CONTPAQi ya instalados?",
    answer: "Absolutamente. Ofrecemos pólizas de soporte, actualización y capacitación para sistemas CONTPAQi, asegurando que tu contabilidad y administración no se detengan."
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer: "La forma más rápida es a través de nuestro botón de WhatsApp, o llenando el formulario de contacto en esta página. Respondemos en menos de 24 horas."
  }
];

/**/ 
export interface NewsItems {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: string;
  slug: string;
  image: string;
  content: string;
  author: string;
  readTime: string;
  tags: string[];
}

export const LATEST_NEWS: NewsItems[] = newsData.slice(0, 3);

export const ALL_NEWS: NewsItem[] = newsData;