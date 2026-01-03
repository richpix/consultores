import React from 'react';

interface ServiceDetailCardProps {
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<any>;
  colors: {
    icon: string;
    accent: string;
  };
   imageUrl?: string;
   imageAlt?: string;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ 
  title, 
  category, 
  description, 
  icon: Icon,
  colors,
  imageUrl,
  imageAlt = `${title} - ${category}` // Alt por defecto  
 
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">

    {/* SECCIÓN DE BANNER/IMAGEN */}
          {imageUrl && (
            <div className="relative w-full h-48 overflow-hidden bg-gray-100 rounded-lg mb-6 group">
              <img 
                src={imageUrl}
                alt={imageAlt}
                width={400}
                height={192}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 "
                // Atributos adicionales para SEO y rendimiento
                sizes="(max-width: 768px) 100vw, 400px"
                decoding="async"
              />
              {/* Overlay sutil para mejorar legibilidad */}
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}

      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${colors.icon.replace('text-', 'bg-')}/10`}>
          <Icon size={24} className={colors.icon} />
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-lg font-bold text-gray-800 mb-1">
            {title}
          </h3>
          <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 mb-2">
            {category}
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
         
        <span className="text-xs text-gray-500">
          Servicio disponible
        </span>
        <button
          className="text-sm font-medium text-brand-blue hover:text-brand-dark transition-colors"
          onClick={() => {
            const message = `Hola, me interesa el servicio específico: ${title} (${category}). ¿Podrían darme más información y precio?`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/9844522419?text=${encodedMessage}`, '_blank');
          }}
        >
          Cotizar específico →
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailCard;