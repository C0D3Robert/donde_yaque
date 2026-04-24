// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import PrendaCard from '../components/PrendaCard';
import CategoriaFiltros from '../components/CategoriaFiltros';

const HomePage = () => {
  const [prendas, setPrendas] = useState([]);
  const [categoria, setCategoria] = useState('todas');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrendas = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = categoria !== 'todas' ? { categoria } : {};
        const response = await api.get('/prendas/', { params });
        const data = response.data.results || response.data;
        setPrendas(data);
      } catch (err) {
        setError('No se pudieron cargar las prendas.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrendas();
  }, [categoria]);

  return (
    <div className="home-page">
      <header className="hero-catalogo">
        <h1>Catálogo</h1>
        <p>Explora nuestra colección completa de prendas confeccionadas con elegancia, calidad y atención al detalle.</p>
      </header>

      <CategoriaFiltros categoriaActual={categoria} onCambiarCategoria={setCategoria} />

      <div className="resultados-info">
        {!loading && !error && (
          <p className="contador">{prendas.length} productos encontrados</p>
        )}
      </div>

      {loading && <p className="cargando">Cargando...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid-catalogo">
        {!loading && !error && prendas.map((prenda) => (
          <PrendaCard key={prenda.id} prenda={prenda} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;