import React from 'react';
import { SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-brand-dark mb-4">
            NUESTROS <span className="text-brand-blue">SERVICIOS</span>
          </h2>
          <p className="text-gray-600">
            Ofrecemos un portafolio completo de soluciones tecnológicas diseñadas para escalar con tu negocio y proteger tus activos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`group bg-white p-8 rounded-xl shadow-lg border-b-4 hover:-translate-y-2 transition-all duration-300 ${
                  service.highlight ? 'border-brand-purple ring-2 ring-brand-purple/10 relative overflow-hidden' : 'border-brand-blue'
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    DESTACADO
                  </div>
                )}
                
                <div className={`mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center transition-colors ${
                  service.highlight ? 'bg-purple-100 text-brand-purple group-hover:bg-brand-purple group-hover:text-white' : 'bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'
                }`}>
                  <Icon size={32} />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-500 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <ChevronRight size={16} className="text-brand-blue mr-1 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => navigate('/servicios')}
                  className="inline-block text-sm font-bold text-brand-blue border-b-2 border-transparent hover:border-brand-blue transition-all cursor-pointer"
                >
                  Más información
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;