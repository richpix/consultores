import React, { useState } from 'react';
import { Menu, X, Shield, Phone, } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = true; // Forzamos el estilo de navbar como si ya se hubiera hecho scroll
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Si estamos en otra página, primero ir a home
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Si ya estamos en home, solo hacer scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="" className="flex items-center space-x-2 group">
         <div className={`p-2 rounded ${scrolled ? 'bg-brand-blue text-white' : 'bg-white text-brand-blue'}`}>
            <Shield size={28} strokeWidth={2.5} />
          </div> 
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-xl leading-none ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              Consultores en Tecnología
            </span>
            <span className={`text-xs font-medium tracking-widest ${scrolled ? 'text-brand-blue' : 'text-gray-200'}`}>
               LRP
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`font-heading font-medium uppercase text-sm tracking-wide transition-colors ${
                scrolled ? 'text-brand-dark hover:text-brand-blue' : 'text-white hover:text-brand-purple'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple hover:bg-brand-purple text-white px-5 py-2 rounded font-heading font-medium tracking-wide uppercase text-sm transition-transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
          >
            <Phone size={16} />
            Cotizar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-purple"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} color={scrolled ? '#333' : '#FFF'} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark/90 z-50 transform transition-transform duration-300 flex flex-col justify-center items-center space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={40} />
        </button>
        
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            className="text-white font-heading text-3xl font-bold uppercase hover:text-brand-purple transition-colors"
          >
            {item.label}
          </button>
        ))}
        
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-purple text-white px-8 py-3 rounded text-xl font-heading font-bold mt-4"
        >
          Solicitar Cotización
        </a>
      </div>
    </header>
  );
};

export default Header;