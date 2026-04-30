import { useState } from 'react';
import './Titulo.css';
import './Catalogo.css';
import Filtro from '../catalogo/Filtro';
import Cards from '../catalogo/Cards';

function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState('');
  const [filtroActivo, setFiltroActivo] = useState('');
  const [ordenActivo, setOrdenActivo] = useState('recientes');

  const handleCategoriaChange = (value) => {
    setCategoriaActiva(value);
  };

  const handleFiltroChange = (value) => {
    setFiltroActivo(value);
  };

  const handleOrdenChange = (value) => {
    setOrdenActivo(value);
  };

  return (
    <section className="catalogo-container">
      <Filtro
        onCategoriaChange={handleCategoriaChange}
        onFiltroChange={handleFiltroChange}
        onOrdenChange={handleOrdenChange}
        categoriaActiva={categoriaActiva}
        filtroActivo={filtroActivo}
        ordenActivo={ordenActivo}
      />
      <div className="all-cards">
        <Cards
          categoriaActiva={categoriaActiva}
          filtroActivo={filtroActivo}
          ordenActivo={ordenActivo}
        />
      </div>
    </section>
  );
}

export default Catalogo;