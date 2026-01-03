import React from 'react';
import ServiceDetailCard from './servicedetailcard';

interface ServiceCategoryProps {
  service: {
    title: string;
    description: string;
    items: string[];
    icon: React.ComponentType<any>;
    highlight?: boolean;
  };
  index: number;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ service, index }) => {
  const Icon = service.icon;
  
  // Definir colores por categoría
  const getCategoryColors = () => {
    switch (service.title) {
      case 'Seguridad Electrónica':
        return {
          bg: 'from-blue-50 to-blue-100',
          border: 'border-blue-200',
          icon: 'text-blue-600',
          accent: 'bg-blue-500'
        };
      case 'Conectividad y Redes':
        return {
          bg: 'from-purple-50 to-purple-100',
          border: 'border-purple-200',
          icon: 'text-purple-600',
          accent: 'bg-purple-500'
        };
      case 'Software Empresarial':
        return {
          bg: 'from-green-50 to-green-100',
          border: 'border-green-200',
          icon: 'text-green-600',
          accent: 'bg-green-500'
        };
      case 'Hardware y Equipo':
        return {
          bg: 'from-orange-50 to-orange-100',
          border: 'border-orange-200',
          icon: 'text-orange-600',
          accent: 'bg-orange-500'
        };
      default:
        return {
          bg: 'from-gray-50 to-gray-100',
          border: 'border-gray-200',
          icon: 'text-gray-600',
          accent: 'bg-gray-500'
        };
    }
  };

  const colors = getCategoryColors();

  return (
    <section 
      className={`rounded-2xl ${colors.bg} border ${colors.border} p-6 md:p-8`}
      id={service.title.toLowerCase().replace(/\s+/g, '-')}
    >
      {/* Header de la categoría */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-white ${colors.border} border`}>
            <Icon size={32} className={colors.icon} />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-300">
            <span className={`w-2 h-2 rounded-full ${colors.accent}`}></span>
            <span className="text-sm font-medium text-gray-700">
              {service.items.length} servicios disponibles
            </span>
          </span>
        </div>
      </div>

      {/* Grid de servicios individuales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.items.map((item, itemIndex) => (
          <ServiceDetailCard
            key={`${service.title}-${itemIndex}`}
            title={item}
            category={service.title}
            description={getServiceDescription(service.title, item)}
            imageUrl={geturlDescription(service.title, item)}
            icon={service.icon}
            colors={colors}
          />
        ))}
      </div>

      {/* CTA específico de la categoría */}
      <div className="mt-8 pt-6 border-t border-gray-300/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-gray-700 font-medium">
              ¿Necesitas ayuda con <span className="font-bold">{service.title}</span>?
            </p>
            <p className="text-sm text-gray-500">
              Pregunta por precios, especificaciones técnicas o instalación
            </p>
          </div>
          <button
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all border border-gray-300 shadow-sm whitespace-nowrap"
            onClick={() => {
              const message = `Hola, me interesan servicios de ${service.title}. ¿Podrían darme más información?`;
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/9844522419?text=${encodedMessage}`, '_blank');
            }}
          >
            Consultar esta categoría
          </button>
        </div>
      </div>
    </section>
  );
};

// Función para generar descripciones específicas
const getServiceDescription = (category: string, item: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    'Seguridad Electrónica': {
      'Instalación de CCTV': 'Sistemas de vigilancia 24/7 con cámaras de alta resolución, visión nocturna y almacenamiento en la nube.',
      'Mantenimiento preventivo': 'Revisiones periódicas para asegurar el funcionamiento óptimo de tus sistemas de seguridad.',
      'GPS Vehicular': 'Rastreo satelital en tiempo real para flotillas vehiculares con reportes detallados.',
      'Control de acceso': 'Sistemas biométricos y con tarjeta para gestionar accesos en tu empresa.'
    },
    'Conectividad y Redes': {
      'Instalación de Fibra Óptica': 'Tendido y empalme de fibra óptica para máxima velocidad y estabilidad.',
      'Cableado estructurado': 'Cableado organizado Cat6/Cat7 para voz, datos y video.',
      'Configuración de redes WiFi': 'Redes empresariales con cobertura total y seguridad avanzada.',
      'Enlaces punto a punto': 'Conexiones inalámbricas para largas distancias entre edificios.'
    },
    'Software Empresarial': {
      'Licencias Office365': 'Suite completa de Microsoft para productividad empresarial.',
      'Soporte CONTPAQi': 'Instalación, configuración y soporte técnico especializado.',
      'AutoCAD': 'Licencias oficiales para diseño arquitectónico y de ingeniería.',
      'Antivirus Corporativo': 'Protección avanzada para endpoints empresariales.'
    },
    'Hardware y Equipo': {
      'Computadoras y Laptops': 'Equipos de alto rendimiento para oficina y diseño.',
      'Impresoras y Plotters': 'Equipos de impresión profesional para diferentes volúmenes.',
      'Pantallas y Monitores': 'Pantallas de alta resolución para diseño y productividad.',
      'Componentes (RAM/GPU)': 'Actualización de componentes para mejorar el rendimiento.'
    }
  };

  return descriptions[category]?.[item] || `Servicio de ${item} dentro de ${category}. Contáctanos para más detalles.`;
};


// Función para obtener URL de imagen específica
const geturlDescription = (category: string, item: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    'Seguridad Electrónica': {
      'Instalación de CCTV': 'https://cdn.pixabay.com/photo/2022/06/17/09/50/cctv-surveillance-camera-7267551_1280.jpg',
      'Mantenimiento preventivo': 'https://cdn.pixabay.com/photo/2018/06/17/20/14/screws-3481339_1280.jpg',
      'GPS Vehicular': 'https://cdn.pixabay.com/photo/2018/10/05/08/56/navigation-3725424_1280.jpg',
      'Control de acceso': 'https://cdn.pixabay.com/photo/2019/12/18/12/17/fingerprint-4703841_1280.jpg'
    },
    'Conectividad y Redes': {
      'Instalación de Fibra Óptica': 'https://pixabay.com/es/photos/c%c3%a1mara-de-vigilancia-cctv-7267551/',
      'Cableado estructurado': 'https://pixabay.com/es/photos/c%c3%a1mara-de-vigilancia-cctv-7267551/',
      'Configuración de redes WiFi': 'https://pixabay.com/es/photos/c%c3%a1mara-de-vigilancia-cctv-7267551/',
      'Enlaces punto a punto': 'https://pixabay.com/es/photos/c%c3%a1mara-de-vigilancia-cctv-7267551/'
    },
    'Software Empresarial': {
      'Licencias Office365': 'https://www.eway-crm.com/wp-content/uploads/2022/10/office-365-new-logo.png',
      'Soporte CONTPAQi': 'https://contenidos.contpaqi.com/files/Logo_CONTPAQi_Contabiliza_a.png',
      'AutoCAD': 'https://1000marcas.net/wp-content/uploads/2020/01/AutoCAD-log%D0%BE.jpg',
      'Antivirus Corporativo': 'https://static3.avast.com/10004631/web/i/v3/components/icons/seo/open-graph-image.png'
    },
    'Hardware y Equipo': {
      'Computadoras y Laptops': 'https://cdn.pixabay.com/photo/2017/04/14/17/22/laptops-2230826_1280.jpg',
      'Impresoras y Plotters': 'https://cdn.pixabay.com/photo/2017/03/13/07/33/plotter-2138990_1280.jpg',
      'Pantallas y Monitores': 'https://img.freepik.com/foto-gratis/nadie-estacion-trabajo-vacia-centro-llamadas-computadoras-e-instrumentos-audio-no-hay-personas-escritorios-oficinas-atencion-al-cliente-tecnologia-telecomunicaciones-ofreciendo-asistencia-linea-ayuda_482257-44179.jpg',
      'Componentes (RAM/GPU)': 'https://img.freepik.com/vector-gratis/concepto-flat-ingenieria-ordenadores_23-2148154728.jpg'
    }
  };

  return descriptions[category]?.[item] || `error de url`;
};

export default ServiceCategory;