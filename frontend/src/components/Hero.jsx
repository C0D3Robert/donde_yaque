import { useState, useEffect } from 'react';
import './Hero.css';

// Importar imágenes del carousel
import img1 from '../assets/slide1.webp';
import img2 from '../assets/slide2.webp';
import img3 from '../assets/slide3.jpg';

// Array de slides con títulos y descripciones
const slides = [
  {
    id: 1,
    image: img1,
    title: 'Estilo que define',
    description: 'Prendas únicas diseñadas para resaltar tu personalidad',
  },
  {
    id: 2,
    image: img2,
    title: 'Elegancia en cada puntada',
    description: 'Confecciones artesanales con los mejores materiales',
  },
  {
    id: 3,
    image: img3,
    title: 'Alta costura accesible',
    description: 'Lujo y calidad al alcance de todos',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-avance del carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
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
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
