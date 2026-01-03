import React from 'react';
import { Target, Eye } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-8">
              TRABAJAMOS EN <span className="text-brand-blue">QUINTANA ROO</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Somos una empresa joven y dinámica con sede en el corazón de la Riviera Maya. 
              Entendemos que la tecnología no es solo hardware, es la columna vertebral de tu seguridad y productividad.
            </p>
            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-brand-blue">
              <p className="text-brand-white font-bold font-heading text-xl mb-2">Nuestra Misión</p>
              <p className="text-gray-300 italic">"{COMPANY_INFO.mission}"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all">
              <Eye className="text-brand-blue mb-4" size={40} />
              <h3 className="font-heading text-2xl font-bold mb-3">Visión</h3>
              <p className="text-gray-400">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all">
              <Target className="text-brand-blue mb-4" size={40} />
              <h3 className="font-heading text-2xl font-bold mb-3">Enfoque</h3>
              <p className="text-gray-400">
                Nos enfocamos en entregar resultados tangibles: mayor seguridad para tu patrimonio y mayor velocidad para tus comunicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;