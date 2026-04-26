import { useState } from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
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
      setIsOpen(false); // cerrar menu si está abierto
    }
  };

  const handleCatalogClick = () => {
    navigate('/catalogo');
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-brand">
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
              🔍
            </button>
          </form>

          {/* Redes sociales */}
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>

          {/* Botón Catálogo */}
          <button className="catalog-btn" onClick={handleCatalogClick}>
            Ver Catálogo
          </button>
        </div>
      </div>
    </nav>
  );
}
