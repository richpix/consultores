import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-dark mb-2">
            PREGUNTAS FRECUENTES
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg border transition-all duration-300 ${
                openIndex === index ? 'border-brand-blue shadow-md' : 'border-gray-200'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-heading font-medium text-lg ${
                  openIndex === index ? 'text-brand-blue' : 'text-gray-700'
                }`}>
                  {faq.question}
                </span>
                <span className={`ml-4 p-1 rounded-full ${
                    openIndex === index ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;