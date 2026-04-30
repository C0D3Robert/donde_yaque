import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api';
import PrendaCard from '../PrendaCard';
import './Cards.css';

function Cards({ categoriaActiva, filtroActivo, ordenActivo }) {
  const [prendas, setPrendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const [hasNextPage, setHasNextPage] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const observerTarget = useRef(null);

  const searchQuery = searchParams.get('search') || '';

  // Función para ordenar prendas
  const ordenarPrendas = useCallback((prendas, orden) => {
    const copia = [...prendas];

    switch (orden) {
      case 'nombre':
        return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));

      case 'precio-menor':
        return copia.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));

      case 'precio-mayor':
        return copia.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));

      case 'recientes':
      default:
        return copia.sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion));
    }
  }, []);

  // Fetch inicial
  useEffect(() => {
    const fetchPrendas = async () => {
      setLoading(true);
      setError(null);
      setPrendas([]);
      setHasNextPage(false);
      
      try {
        const params = {};

        if (categoriaActiva) {
          params.categoria = categoriaActiva;
        }

        if (filtroActivo) {
          params.seccion = filtroActivo;
        }

        if (searchQuery) {
          params.search = searchQuery;
        }

        const response = await api.get('/prendas/', { params });
        let data = response.data.results || response.data;

        // Ordenamiento
        data = ordenarPrendas(data, ordenActivo);

        setPrendas(data);
        
        // Guardar URL de siguiente página si existe
        if (response.data.next) {
          setNextPageUrl(response.data.next);
          setHasNextPage(true);
        }
      } catch (err) {
        setError('Error cargando los productos. Por favor intenta de nuevo.');
        console.error(err);
        setPrendas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPrendas();
  }, [categoriaActiva, filtroActivo, searchQuery, ordenActivo, ordenarPrendas]);

  // Cargar más productos
  const handleLoadMore = useCallback(async () => {
    if (!nextPageUrl || loadingMore) return;

    setLoadingMore(true);
    try {
      const response = await api.get(nextPageUrl);
      let moreData = response.data.results || response.data;

      // Ordenamiento
      moreData = ordenarPrendas(moreData, ordenActivo);

      setPrendas(prev => [...prev, ...moreData]);

      // Actualizar siguiente página
      if (response.data.next) {
        setNextPageUrl(response.data.next);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
        setNextPageUrl(null);
      }
    } catch (err) {
      console.error('Error cargando más productos:', err);
      setError('Error cargando más productos.');
    } finally {
      setLoadingMore(false);
    }
  }, [nextPageUrl, loadingMore, ordenActivo, ordenarPrendas]);

  // Intersection Observer para infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !loadingMore && !loading) {
          handleLoadMore();
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [hasNextPage, loadingMore, loading, handleLoadMore]);

  return (
    <div className="cards-container">
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Cargando productos...</p>
        </div>
      )}

      {error && !loading && (
        <div className="error-state">
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && prendas.length === 0 && (
        <div className="empty-state">
          <p>No se encontraron productos.</p>
          {searchQuery && <p className="search-hint">Intenta con otras palabras clave.</p>}
        </div>
      )}

      {!loading && !error && prendas.length > 0 && (
        <>
          <div className="cards-header">
            <p className="results-count">
              Se cargaron <span className="count-number">{prendas.length}</span> producto{prendas.length !== 1 ? 's' : ''}
              {hasNextPage && ' (baje para cargar más)'}
            </p>
          </div>
          <div className="grid-prendas">
            {prendas.map((prenda) => (
              <PrendaCard key={prenda.id} prenda={prenda} />
            ))}
          </div>

          {/* Elemento de observación para infinite scroll */}
          {hasNextPage && (
            <div ref={observerTarget} className="observer-target">
              {loadingMore && (
                <div className="loading-more">
                  <div className="spinner-small"></div>
                  <p>Cargando más productos...</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cards;
