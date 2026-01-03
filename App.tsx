import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServicesPage from './pages/ServicesPage';
import NewsPage from './pages/NewsPage';
import NewsPost from './pages/newspost';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-brand-dark selection:bg-brand-blue selection:text-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/noticias/:slug" element={<NewsPost />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;