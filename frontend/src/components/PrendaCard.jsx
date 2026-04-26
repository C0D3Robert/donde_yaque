import { useNavigate } from 'react-router-dom';
import './PrendaCard.css';

export default function PrendaCard({ prenda }) {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    navigate(`/prenda/${prenda.id}`);
  };

  return (
    <div className="prenda-card">
      {/* Contenedor de imagen */}
      <div className="prenda-card-image">
        <img src={prenda.imagen_url || 'https://via.placeholder.com/400x500?text=Sin+imagen'} alt={prenda.nombre} loading="lazy" />
        
        {/* Badges */}
        <div className="prenda-badges">
          {prenda.es_nuevo && <span className="badge badge-nuevo">Nuevo</span>}
          {prenda.es_popular && <span className="badge badge-popular">Popular</span>}
        </div>

        {/* Overlay "Ver detalles" */}
        <div className="prenda-overlay">
          <button className="ver-detalles-btn" onClick={handleViewDetails}>
            Ver detalles
          </button>
        </div>
      </div>

      {/* Información de la prenda */}
      <div className="prenda-info">
        <h3 className="prenda-nombre">{prenda.nombre}</h3>
        <p className="prenda-descripcion">{prenda.descripcion}</p>
      </div>
    </div>
  );
}
