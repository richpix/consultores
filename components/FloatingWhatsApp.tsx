import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={COMPANY_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded shadow text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Cotiza ahora!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;