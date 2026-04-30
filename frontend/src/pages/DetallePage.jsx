import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack, IoLogoWhatsapp } from 'react-icons/io5';
import api from '../services/api';
import './DetallePage.css';

const DetallePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [prenda, setPrenda] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GALERÍA - COMENTADO PARA FUTURA IMPLEMENTACIÓN
  // const [imagenPrincipal, setImagenPrincipal] = useState(null);
  // const [imagenesAdicionales, setImagenesAdicionales] = useState([]);

  useEffect(() => {
    const fetchPrenda = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/prendas/${id}/`);
        setPrenda(response.data);

        // GALERÍA - COMENTADO PARA FUTURA IMPLEMENTACIÓN
        // if (response.data.imagen) {
        //   setImagenPrincipal(response.data.imagen);
        // }
        // if (response.data.imagenes_adicionales && response.data.imagenes_adicionales.length > 0) {
        //   setImagenesAdicionales(response.data.imagenes_adicionales);
        // }
      } catch (err) {
        console.error('Error cargando prenda:', err);
        setError('No se pudo cargar la información del producto');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPrenda();
    }
  }, [id]);

  // FUNCIÓN PARA GENERAR URL DE WHATSAPP
  const generarUrlWhatsApp = () => {
    const mensaje = `Hola, me interesa el producto: ${prenda?.nombre} - $${prenda?.precio}. ¿Tienes disponibilidad?`;
    const urlEncoded = encodeURIComponent(mensaje);
    return `https://wa.me/+5353686161?text=${urlEncoded}`;
  };

  // GALERÍA - COMENTADO PARA FUTURA IMPLEMENTACIÓN
  // const handleSeleccionarImagen = (imagen) => {
  //   setImagenPrincipal(imagen);
  // };

  if (loading) {
    return (
      <div className="detalle-page loading-state">
        <div className="spinner"></div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (error || !prenda) {
    return (
      <div className="detalle-page error-state">
        <p className="error-message">{error || 'Producto no encontrado'}</p>
        <button className="volver-btn" onClick={() => navigate( '/catalogo' )}>
          <IoArrowBack /> Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="detalle-page">
      <div className="detalle-header">
        <button className="volver-btn" onClick={() => navigate( '/catalogo' )}>
          <IoArrowBack size={20} /> Volver al catálogo
        </button>
      </div>

      <section className="detalle-principal">
        <div className="detalle-imagen-container">
          <div className="imagen-principal-wrapper">
            {prenda.imagen_url && (
              <img
                src={prenda.imagen_url}
                alt={prenda.nombre}
                className="imagen-principal"
              />
            )}
            {prenda.popular && (
              <div className="badge badge-popular">Popular</div>
            )}
            {prenda.nuevo && (
              <div className="badge badge-nuevo">Nuevo</div>
            )}
          </div>

          {/* GALERÍA DE MINIATURAS - COMENTADO PARA FUTURA IMPLEMENTACIÓN */}
          {/* 
          <div className="galeria-miniaturas">
            {imagenesAdicionales && imagenesAdicionales.map((imagen, index) => (
              <button
                key={index}
                className={`miniatura ${imagenPrincipal === imagen.url ? 'active' : ''}`}
                onClick={() => handleSeleccionarImagen(imagen.url)}
              >
                <img src={imagen.url} alt={`Miniatura ${index + 1}`} />
              </button>
            ))}
          </div>
          */}
        </div>

        <div className="detalle-info">
          <p className="detalle-categoria">{prenda.categoria_nombre || 'Categoría'}</p>

          <h1 className="detalle-titulo">{prenda.nombre}</h1>

          <div className="detalle-precio">
            <span className="precio-value">${prenda.precio}</span>
          </div>

          <div className="detalle-descripcion">
            <h3 className="descripcion-titulo">Descripción</h3>
            <p className="descripcion-texto">
              {prenda.descripcion || 'No hay descripción disponible para este producto.'}
            </p>
          </div>

          <a
            href={generarUrlWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <IoLogoWhatsapp size={22} />
            Consultar por WhatsApp
          </a>

          <p className="detalle-nota">
            Contactanos para más información sobre disponibilidad y pedidos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DetallePage;
