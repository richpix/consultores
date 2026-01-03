import React, { useState } from 'react';
import CategoryFilter from './categoryfilter';
import ServiceCategory from './servicecategory';
import { SERVICES } from '../constants';
import { Filter, Grid, Search } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todo');


  // Datos de categorías para el filtro
  const CATEGORIES = [
    { id: 'todo', label: 'Todo', icon: Grid },
    { id: 'Seguridad Electrónica', label: 'Seguridad', icon: SERVICES[0].icon },
    { id: 'Conectividad y Redes', label: 'Conectividad', icon: SERVICES[1].icon },
    { id: 'Software Empresarial', label: 'Software', icon: SERVICES[2].icon },
    { id: 'Hardware y Equipo', label: 'Hardware', icon: SERVICES[3].icon },
  ];

  // Obtener categoría activa
  const getActiveCategoryData = () => {
    if (activeCategory === 'todo') return SERVICES;
    return SERVICES.filter(service => service.title === activeCategory);
  };

  const filteredServices = getActiveCategoryData();
  const activeCategoryData = CATEGORIES.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="text-center bg-white pt-16 md:pt-24 pb-8 md:pb-12  border-gray-200">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark mb-4">
          Catálogo de Servicios
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Soluciones tecnológicas específicas para cada necesidad.
          Selecciona una categoría para ver los servicios disponibles.
        </p>



      </div>



      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 ">
        {/* Filtro de Categorías */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Sección 1: Icono y Label */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter size={16} />
            <span className="font-medium">Filtrar por:</span>
          </div>

          {/* Sección 2: Tu componente de filtro (se mantiene igual) */}
          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Sección 3: Contador */}
          {/* CORRECCIÓN: Se eliminó 'text-center' y 'mb-8' para que se alinee con flex-row */}
          <div className="text-sm text-gray-500">
            {activeCategory === 'todo' ? '4 categorías' : '1 categoría'}
          </div>

        </div>

        {/* Grid de Categorías de Servicios */}
        <div className="space-y-12 md:space-y-16">
          {filteredServices.map((service, index) => (
            <ServiceCategory
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-200">
            <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-gray-600 mb-6">
              Combinamos nuestros servicios para crear soluciones a medida.
              Cuéntanos tu proyecto y te asesoramos sin compromiso.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;