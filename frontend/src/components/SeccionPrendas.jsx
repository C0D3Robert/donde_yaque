import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import PrendaCard from './PrendaCard';
import './SeccionPrendas.css';

export default function SeccionPrendas({ titulo, seccion, linkText = 'Ver más' }) {
  const [prendas, setPrendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrendas = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get('/prendas/', {
          params: { seccion },
        });
        const data = response.data.results || response.data;
        // Limitar a 5 items para la sección
        setPrendas(data.slice(0, 5));
      } catch (err) {
        setError(`No se pudieron cargar las ${titulo.toLowerCase()}.`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrendas();
  }, [seccion, titulo]);

  const handleVerMas = () => {
    navigate(`/catalogo`);
  };

  return (
    <section className="seccion-prendas">
      <div className="seccion-header">
        <h2 className="seccion-titulo">{titulo}</h2>
        <button className="ver-mas-link" onClick={handleVerMas} aria-label={`${linkText} - ${titulo}`}>
          {linkText} <span className="flecha">→</span>
        </button>
      </div>

      {loading && <p className="cargando">Cargando...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="grid-prendas">
          {prendas.map((prenda) => (
            <PrendaCard key={prenda.id} prenda={prenda} />
          ))}
        </div>
      )}

      {!loading && !error && prendas.length === 0 && (
        <p className="sin-resultados">No hay prendas disponibles en esta sección.</p>
      )}
    </section>
  );
}
