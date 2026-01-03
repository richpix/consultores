import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_NEWS } from '.././constants';
import { Calendar, Tag, Clock, Search, Filter } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');

  // Obtener categorías únicas
  const categories = ['todas', ...Array.from(new Set(ALL_NEWS.map(news => news.category)))];

  // Filtrar noticias
  const filteredNews = ALL_NEWS.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'todas' || news.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="text-center bg-white pt-16 md:pt-24 pb-8 md:pb-12  border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
             Noticias
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Artículos, guías y noticias sobre seguridad, conectividad y tecnología empresarial.
            </p>
            
            {/* Barra de búsqueda */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar artículos, temas o categorías..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple  border border-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter size={16} />
              <span className="font-medium">Filtrar por:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-brand-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredNews.length} {filteredNews.length === 1 ? 'artículo' : 'artículos'} encontrados
            </div>
          </div>
        </div>
      </div>

      {/* Grid de noticias */}
      <div className="container mx-auto px-4 py-12">
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map(news => (
              <article 
                key={news.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <Link to={`/noticias/${news.slug}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} />
                        {news.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-purple transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {news.summary}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple font-bold text-sm">
                          {news.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-xs text-gray-600">{news.author.split(' ')[0]}</span>
                      </div>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar size={12} />
                        {news.date}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Intenta con otros términos de búsqueda o selecciona una categoría diferente.
            </p>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default BlogPage;