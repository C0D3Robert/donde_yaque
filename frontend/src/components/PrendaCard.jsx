// src/components/PrendaCard.jsx
import React from 'react';

const PrendaCard = ({ prenda }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={prenda.imagen_url || 'https://via.placeholder.com/400x500?text=Sin+imagen'} 
          alt={prenda.nombre}
          loading="lazy"
        />
        {/* Badges dentro de la imagen, arriba a la izquierda */}
        <div className="badges-container">
          {prenda.es_nuevo && <span className="badge badge-nuevo">Nuevo</span>}
          {prenda.es_popular && <span className="badge badge-popular">Popular</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>{prenda.nombre}</h3>
        <p className="descripcion">{prenda.descripcion}</p>
        <p className="precio">${prenda.precio}</p>
      </div>
    </div>
  );
};

export default PrendaCard;