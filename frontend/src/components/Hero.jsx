import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import './Hero.css';

// Importar imágenes del carousel
import img1 from '../assets/slide1.webp';
import img2 from '../assets/slide2.webp';
import img3 from '../assets/slide3.webp';

const SLIDE_INTERVAL = 10000; // 10 segundos

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoizar slides para evitar recalcular en cada render
  const slides = useMemo(() => [
    {
      id: 1,
      image: img1,
      title: 'Tradición que rompe esquemas',
      description: 'Artesanía con actitud. Viste diferente.',
    },
    {
      id: 2,
      image: img2,
      title: 'Raíces con estilo',
      description: 'Lo nuestro, llevado a otro nivel.',
    },
    {
      id: 3,
      image: img3,
      title: 'Hecho a mano, hecho para destacar',
      description: 'Moda con historia, diseñada para impactar.',
    },
  ], []);

  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleIndicatorClick = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <section className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Filtro oscuro transparente */}
            <div className="hero-overlay"></div>

            {/* Contenido centrado */}
            <div className="hero-content">
              <h2 className="hero-title">{slide.title}</h2>
              <p className="hero-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de slide (dots) */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Ir a slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(Hero);
