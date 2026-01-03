import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LATEST_NEWS } from '../constants';
import { Calendar, Tag, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl font-bold text-brand-dark mb-4">
              NOTICIAS Y <span className="text-brand-purple">ACTUALIZACIONES</span>
            </h2>
            <p className="text-gray-600">
              Mantente al día con las últimas tendencias en tecnología y seguridad para tu empresa.
            </p>
          </div>
          <button
            onClick={() => navigate('/noticias')}
            className="hidden md:block px-6 py-2 border-2 border-brand-dark text-brand-dark font-bold rounded hover:bg-brand-dark hover:text-white transition-colors"
          >
            Ver todo 
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_NEWS.map((news) => (
            <article 
              key={news.id} 
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group cursor-pointer"
              onClick={() => navigate(`/noticias/${news.slug}`)}
            >
              <div className="h-48 overflow-hidden bg-gray-200 relative">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {news.category}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  <Clock size={12} />
                  {news.readTime} lectura
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {news.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={14} />
                    {news.category}
                  </span>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-blue transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                  {news.summary}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">
                    Por: {news.author}
                  </span>
                  <button className="text-brand-blue font-bold text-sm hover:underline hover:text-brand-purple">
                    Leer artículo completo &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => navigate('/noticias')}
            className="px-6 py-2 border-2 border-brand-dark text-brand-dark font-bold rounded hover:bg-brand-dark hover:text-white transition-colors"
          >
            Ver todo el blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;