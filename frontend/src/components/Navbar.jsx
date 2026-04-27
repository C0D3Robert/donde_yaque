import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import RedesSociales from '../components/RedesSociales';
import Logo from '../assets/logo.jpg';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalogo?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  const handleCatalogClick = () => {
    navigate('/catalogo');
    setIsOpen(false);
  };

  const handleInicioClick = () => {
    navigate('');
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-brand logotipo" >
          <img src={Logo} alt="Logo" className='logo' />
          <h1>Donde Yaque</h1>
        </div>

        {/* Hamburger menu (mobile) */}
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <MdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </button>

        {/* Menu content */}
        <div className={`navbar-content ${isOpen ? 'active' : ''}`}>
          {/* Buscador */}
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar prendas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <IoMdSearch />
            </button>
          </form>

          {/* Redes sociales */}
          <RedesSociales />

          {/* Botón Catálogo */}
          <button className="catalog-btn" onClick={handleCatalogClick}>
            Ver Catálogo
          </button>
        </div>
      </div>
      <div className='navegacion'>
        <p>
          <button className='no-style-btn' onClick={handleInicioClick}>
            Inicio
          </button>
        </p>
      </div>
    </nav>
  );
}
