// src/components/CategoriaFiltros.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const CategoriaFiltros = ({ categoriaActual, onCambiarCategoria }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await api.get('/categorias/');
        // 🔧 CORRECCIÓN: DRF devuelve resultados paginados
        const data = response.data.results || response.data;
        // Asegurar que sea un array
        if (Array.isArray(data)) {
          setCategorias(data);
        } else {
          console.error('Formato inesperado:', data);
          setCategorias([]);
        }
      } catch (err) {
        console.error('Error al cargar categorías:', err);
        setCategorias([]); // Array vacío en caso de error
      }
    };
    fetchCategorias();
  }, []);

  return (
    <div className="filtros-categorias">
      <button
        className={categoriaActual === 'todas' ? 'active' : ''}
        onClick={() => onCambiarCategoria('todas')}
      >
        Todos
      </button>
      {categorias.map((cat) => (
        <button
          key={cat.id}
          className={categoriaActual === cat.slug ? 'active' : ''}
          onClick={() => onCambiarCategoria(cat.slug)}
        >
          {cat.nombre}
        </button>
      ))}
    </div>
  );
};

export default CategoriaFiltros;