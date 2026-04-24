// src/components/SeccionFiltros.jsx
import React from 'react';

const SeccionFiltros = ({ seccionActual, onCambiarSeccion }) => {
  const secciones = [
    { id: 'todas', label: 'Todas' },
    { id: 'popular', label: 'Más Popular' },
    { id: 'nuevo', label: 'Nuevo' },
    { id: 'verano', label: 'Verano' },
  ];

  return (
    <div className="filtros">
      {secciones.map((sec) => (
        <button
          key={sec.id}
          className={seccionActual === sec.id ? 'active' : ''}
          onClick={() => onCambiarSeccion(sec.id)}
        >
          {sec.label}
        </button>
      ))}
    </div>
  );
};

export default SeccionFiltros;