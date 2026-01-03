import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      alert('¡Gracias por su mensaje, nos comunicaremos pronto!');
      window.history.replaceState({}, '', '/');
      window.location.hash = '';
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">
              CONTÁCTANOS
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Estamos listos para asesorarte en tu próximo proyecto de seguridad o tecnología. 
              Servicios disponibles en <strong>{COMPANY_INFO.locations.join(', ')}.</strong>
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue p-3 rounded-full">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl">Llámanos / WhatsApp</h4>
                  <p className="text-gray-400 mb-1">Lunes a Viernes: 9am - 7pm</p>
                  <a href={COMPANY_INFO.whatsappUrl} className="text-brand-white font-bold text-lg hover:text-white transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue p-3 rounded-full">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl">Correo Electrónico</h4>
                  <p className="text-gray-400 mb-1">Solicita tu factura o cotización</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-white font-bold hover:text-white transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue p-3 rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl">Cobertura</h4>
                  <p className="text-gray-400">
                    Atendemos en toda la zona norte de Quintana Roo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-brand-dark p-8 rounded-xl shadow-2xl">
            <h3 className="font-heading text-2xl font-bold mb-6 text-brand-blue">
              Envíanos un mensaje
            </h3>
            <form 
              action="https://formsubmit.co/consultoreslrp@gmail.com" 
              method="POST" 
              className="space-y-5"
              onSubmit={() => setIsSubmitting(true)}
            >
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?success=true`} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow"
                  placeholder="Ej. juan@empresa.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">¿En qué podemos ayudarte?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow"
                  placeholder="Me interesa cotizar un sistema de cámaras..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand-purple text-white font-bold py-4 rounded shadow-lg hover:bg-brand-purple transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;