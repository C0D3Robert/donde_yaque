// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import SeccionPrendas from '../components/SeccionPrendas';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <SeccionPrendas titulo="Nuevos" seccion="nuevo" linkText="Ver más" />
      <SeccionPrendas titulo="Más Populares" seccion="popular" linkText="Ver más" />
    </div>
  );
};

export default HomePage;