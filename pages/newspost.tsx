import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_NEWS } from '../constants';
import { Calendar, Tag, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Buscar la noticia por slug
  const post = ALL_NEWS.find(news => news.slug === slug);
  
  // Si no encuentra la noticia
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-6">El artículo que buscas no existe o ha sido movido.</p>
          <button
            onClick={() => navigate('/noticias')}
            className="inline-flex items-center gap-2 text-brand-blue hover:underline"
          >
            <ArrowLeft size={16} />
            Volver al blog
          </button>
        </div>
      </div>
    );
  }

  // Encontrar artículos relacionados (misma categoría)
  const relatedPosts = ALL_NEWS
    .filter(news => news.category === post.category && news.id !== post.id)
    .slice(0, 3);

  // URL para compartir
  const shareUrl = window.location.href;
  const shareText = `Lee "${post.title}" en Consultores en Tecnologia LRP`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón volver */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/noticias')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-dark"
        >
          <ArrowLeft size={20} />
          Volver al blog
        </button>
       </div>


                      {/* Banner con imagen de fondo y contenido superpuesto */}
                <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden shadow-xl mb-10">
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay para mejorar legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  </div>

                  {/* Contenido superpuesto */}
                  <div className="relative h-full flex flex-col justify-end p-6 md:p-10 text-white">
                    {/* Meta información */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag size={16} />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {post.readTime} de lectura
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={16} />
                          {post.author}
                        </span>
                      </div>

                      <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        {post.title}
                      </h1>

                      <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
                        {post.summary}
                      </p>
                    </div>
                  </div>
                </div>

      {/* Header del artículo */}
      <article className="container mx-auto px-4 max-w-4xl">
       
        {/* Contenido */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Compartir */}
        <div className="bg-gray-100 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">¿Te gustó este artículo?</h3>
              <p className="text-gray-600">Compártelo con tus colegas</p>
            </div>
            <div className="flex gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                title="Compartir en Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"
                title="Compartir en Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
                title="Compartir en LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert('¡Enlace copiado al portapapeles!');
                }}
                className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                title="Copiar enlace"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Artículos relacionados */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold text-gray-800 mb-6">
              Artículos relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link
                  key={related.id}
                  to={`/noticias/${related.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 mb-2 line-clamp-2">
                      {related.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{related.date}</span>
                      <span>{related.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

       
      </article>
    </div>
  );
};

export default BlogPost;