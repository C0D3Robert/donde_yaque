import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Breadcrumb.css';

function Breadcrumb() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const generateBreadcrumbs = () => {
      const path = location.pathname;
      const crumbs = [
        { label: 'INICIO', href: '/' }
      ];

      if (path === '/') {
        setBreadcrumbs(crumbs);
        return;
      }

      if (path === '/catalogo') {
        crumbs.push({ label: 'CATÁLOGO', href: '/catalogo' });

        // Agregar categoría o filtro si existe
        const categoria = searchParams.get('categoria');
        const seccion = searchParams.get('seccion');
        const search = searchParams.get('search');

        if (categoria) {
          crumbs.push({
            label: categoria.toUpperCase(),
            href: `/catalogo?categoria=${categoria}`
          });
        } else if (seccion) {
          const seccionLabel = seccion === 'nuevo' ? 'NUEVOS' : 'POPULARES';
          crumbs.push({
            label: seccionLabel,
            href: `/catalogo?seccion=${seccion}`
          });
        } else if (search) {
          crumbs.push({
            label: `BÚSQUEDA: "${search}"`,
            href: `/catalogo?search=${search}`
          });
        }

        setBreadcrumbs(crumbs);
        return;
      }

      if (path.startsWith('/prenda/')) {
        crumbs.push({ label: 'CATÁLOGO', href: '/catalogo' });
        crumbs.push({ label: 'DETALLES', href: path });
        setBreadcrumbs(crumbs);
        return;
      }

      setBreadcrumbs(crumbs);
    };

    generateBreadcrumbs();
  }, [location.pathname, searchParams]);

  return (
    <nav className="breadcrumb-nav">
      <div className="breadcrumb-container">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="breadcrumb-item">
            <a href={crumb.href} className="breadcrumb-link">
              {crumb.label}
            </a>
            {index < breadcrumbs.length - 1 && (
              <span className="breadcrumb-separator">›</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Breadcrumb;
