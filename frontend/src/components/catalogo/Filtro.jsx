import { useState, useEffect } from 'react';
import { MdFilterList } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import api from '../../services/api';
import './Filtro.css';

const FILTROS = [
  { id: 'todos', label: 'Todos', value: '' },
  { id: 'populares', label: 'Populares', value: 'popular' },
  { id: 'nuevos', label: 'Nuevos', value: 'nuevo' },
];

const ORDENAR_OPTIONS = [
  { id: 'recientes', label: 'Más recientes', value: 'recientes' },
  { id: 'nombre', label: 'Nombre', value: 'nombre' },
  { id: 'precio-menor', label: 'Precio: menor a mayor', value: 'precio-menor' },
  { id: 'precio-mayor', label: 'Precio: mayor a menor', value: 'precio-mayor' },
];

function Filtro({ 
  onCategoriaChange, 
  onFiltroChange, 
  onOrdenChange,
  categoriaActiva = '',
  filtroActivo = '',
  ordenActivo = 'recientes'
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [loadingCategorias, setLoadingCategorias] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
      setLoadingCategorias(true);
      try {
        const response = await api.get('/categorias/');
        const data = response.data.results || response.data;
        const categoriasFormateadas = [
          { id: 'todas', label: 'Todas', value: '' },
          ...data.map(cat => ({
            id: cat.slug,
            label: cat.nombre,
            value: cat.slug,
          })),
        ];
        setCategorias(categoriasFormateadas);
      } catch (err) {
        console.error('Error cargando categorías:', err);
        setCategorias([{ id: 'todas', label: 'Todas', value: '' }]);
      } finally {
        setLoadingCategorias(false);
      }
    };
    fetchCategorias();
  }, []);

  const handleCategoriaClick = (value) => {
    onCategoriaChange(value);
  };

  const handleFiltroClick = (value) => {
    onFiltroChange(value);
  };

  const handleOrdenSelect = (value) => {
    onOrdenChange(value);
    setIsDropdownOpen(false);
  };

  const labelOrdenActual = ORDENAR_OPTIONS.find(opt => opt.value === ordenActivo)?.label || 'Más recientes';

  const renderFiltroContent = () => (
    <div className="filtro-content">
      {/* SECCIÓN DE CATEGORÍAS */}
      <div className="filtro-section">
        <h3 className="filtro-title">Categorías</h3>
        {loadingCategorias ? (
          <p className="loading-text">Cargando categorías...</p>
        ) : (
          <div className="filtro-buttons">
            {categorias.map(({ id, label, value }) => (
              <button
                key={id}
                className={`filtro-btn ${categoriaActiva === value ? 'active' : ''}`}
                onClick={() => handleCategoriaClick(value)}
                aria-label={`Filtrar por categoría ${label}`}
                aria-pressed={categoriaActiva === value}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SECCIÓN DE FILTROS (Nuevos/Populares) */}
      <div className="filtro-section">
        <h3 className="filtro-title">Filtros</h3>
        <div className="filtro-buttons">
          {FILTROS.map(({ id, label, value }) => (
            <button
              key={id}
              className={`filtro-btn ${filtroActivo === value ? 'active' : ''}`}
              onClick={() => handleFiltroClick(value)}
              aria-label={`Filtrar por ${label.toLowerCase()}`}
              aria-pressed={filtroActivo === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE ORDENAMIENTO */}
      <div className="filtro-section">
        <h3 className="filtro-title">Ordenar por</h3>
        <div className="dropdown-container">
          <button
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            aria-label="Opciones de ordenamiento"
          >
            <span className="dropdown-text">{labelOrdenActual}</span>
            <span className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}>
              ▼
            </span>
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu" role="listbox">
              {ORDENAR_OPTIONS.map(({ id, label, value }) => (
                <button
                  key={id}
                  className={`dropdown-option ${ordenActivo === value ? 'selected' : ''}`}
                  onClick={() => handleOrdenSelect(value)}
                  role="option"
                  aria-selected={ordenActivo === value}
                >
                  {label}
                  {ordenActivo === value && <span className="checkmark">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* SIDEBAR DESKTOP (visible en pantallas >= 1530px) */}
      <aside className="filtro-sidebar">
        {renderFiltroContent()}
      </aside>

      {/* BOTÓN FLOTANTE (visible en pantallas < 1530px) */}
      <button 
        className="filtro-floating-btn"
        onClick={() => setIsModalOpen(true)}
        aria-label="Abrir filtros"
        title="Abrir filtros"
      >
        <MdFilterList size={24} />
      </button>

      {/* MODAL DEL FILTRO (pantallas < 1530px) */}
      {isModalOpen && (
        <>
          <div 
            className="filtro-modal-backdrop"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          />
          <div className="filtro-modal">
            <div className="filtro-modal-header">
              <h2 className="filtro-modal-title">Filtros</h2>
              <button
                className="filtro-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Cerrar filtros"
              >
                <MdClose size={28} />
              </button>
            </div>
            <div className="filtro-modal-content">
              {renderFiltroContent()}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Filtro;
