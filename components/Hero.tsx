import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg" 
          alt="Tecnología y Seguridad" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative mt-16 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-purple text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Disponible en Cancún, Playa del Carmen y Tulum
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            SEGURIDAD Y <br />
            {/*  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-400"> */ }  
              
              TECNOLOGÍA 
            {/* </span> */ }
          </h1>
          
          <p className="font-sans text-gray-200 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Especialistas en <strong>Sistemas CCTV</strong>, Fibra Óptica y Soluciones Empresariales. 
            Protege tu negocio y optimiza tu conectividad con expertos en Quintana Roo.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={COMPANY_INFO.whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-purple hover:bg-brand-purple text-white text-lg font-bold py-4 px-8 rounded transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3"
            >
              Solicitar Cotización
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue text-lg font-bold py-4 px-8 rounded transition-all flex items-center justify-center"
            >
              Ver Servicios
            </a>
          </div>

          {/* Quick Features */}
          <div className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start text-gray-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-white" size={18} />
              <span>Soporte </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-white" size={18} />
              <span>Instalación</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-white" size={18} />
              <span>Garantía por Escrito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;