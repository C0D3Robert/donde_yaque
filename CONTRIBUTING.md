# 🛠️ Guía de Desarrollo

> Cómo contribuir y extender este proyecto

---

## 📋 Tabla de Contenidos

- [Configuración de Desarrollo](#-configuración-de-desarrollo)
- [Estructura de Carpetas](#-estructura-de-carpetas)
- [Flujo de Trabajo](#-flujo-de-trabajo)
- [Git Workflow](#-git-workflow)
- [Estándares de Código](#-estándares-de-código)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Troubleshooting Avanzado](#-troubleshooting-avanzado)

---

## 🔧 Configuración de Desarrollo

### IDE Recomendado: VS Code

**Extensiones recomendadas:**
```
Python
Pylance
ESLint
Prettier
REST Client
SQLite
Django
```

### Instalar extensiones desde terminal
```bash
# Extensiones Python
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance

# Extensiones JavaScript
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode

# Utilidades
code --install-extension rangav.vscode-thunder-client
code --install-extension alexcvzz.vscode-sqlite
```

---

## 📁 Estructura de Carpetas

### Backend

```
backend/
├── manage.py                    # Herramienta CLI de Django
├── requirements.txt             # Dependencias Python
├── db.sqlite3                   # Base de datos (gitignored)
├── core/                        # Configuración principal
│   ├── __init__.py
│   ├── settings.py             # Configuración Django
│   ├── urls.py                 # URLs principales
│   ├── wsgi.py                 # WSGI para producción
│   └── asgi.py                 # ASGI para WebSockets
├── catalogo/                   # App principal
│   ├── migrations/             # Migraciones de BD
│   ├── __init__.py
│   ├── admin.py                # Configuración admin panel
│   ├── apps.py                 # Configuración de app
│   ├── models.py               # Modelos de datos
│   ├── serializers.py          # Serializers REST
│   ├── views.py                # Vistas y ViewSets
│   ├── urls.py                 # URLs de la app
│   └── tests.py                # Tests unitarios
├── media/                      # Archivos subidos
│   └── prendas/               # Imágenes de prendas
├── static/                     # Archivos estáticos
├── templates/                  # Plantillas HTML
│   └── admin/
│       └── base_site.html     # Personalización admin
└── .gitignore                 # Archivos ignorados
```

### Frontend

```
frontend/
├── package.json               # Dependencias Node.js
├── vite.config.js             # Configuración Vite
├── eslint.config.js           # Configuración ESLint
├── index.html                 # HTML principal
├── public/                    # Archivos públicos
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.jsx              # Punto de entrada
│   ├── App.jsx               # Componente raíz
│   ├── App.css               # Estilos globales
│   ├── index.css             # Reset y estilos base
│   ├── theme.js              # Configuración de tema
│   ├── styles/               # Estilos globales
│   │   └── variables.css     # 🎨 Variables CSS
│   ├── components/           # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── PrendaCard.jsx
│   │   ├── PrendaCard.css
│   │   ├── footer.jsx
│   │   ├── footer.css
│   │   ├── SobreMi.jsx
│   │   ├── SobreMi.css
│   │   ├── RedesSociales.jsx
│   │   ├── RedesSociales.css
│   │   ├── Breadcrumb.jsx
│   │   ├── Breadcrumb.css
│   │   ├── SeccionPrendas.jsx
│   │   ├── SeccionPrendas.css
│   │   ├── Layout.jsx
│   │   └── catalogo/
│   │       ├── Catalogo.jsx
│   │       ├── Catalogo.css
│   │       ├── Filtro.jsx
│   │       ├── Filtro.css
│   │       ├── Cards.jsx
│   │       ├── Cards.css
│   │       ├── Titulo.jsx
│   │       └── Titulo.css
│   ├── pages/                # Páginas (rutas)
│   │   ├── HomePage.jsx
│   │   ├── CatalogoPage.jsx
│   │   ├── DetallePage.jsx
│   │   └── DetallePage.css
│   ├── services/             # Servicios (API calls)
│   │   └── api.js            # Cliente Axios configurado
│   └── assets/               # Recursos
│       ├── hero.png
│       ├── logo.jpg
│       ├── slide1.webp
│       ├── slide2.webp
│       ├── slide3.webp
│       └── ...
├── .gitignore               # Archivos ignorados
├── README.md
└── REFACTORIZATION_LOG.md
```

---

## 🔄 Flujo de Trabajo

### Ciclo típico de desarrollo

```
1. Crear rama
   ↓
2. Hacer cambios
   ↓
3. Validar (lint/tests)
   ↓
4. Commit con mensaje significativo
   ↓
5. Push a rama
   ↓
6. Pull Request
   ↓
7. Merge a main/develop
```

---

## 📚 Git Workflow

### Crear rama de feature

```bash
# Actualizar main
git checkout main
git pull origin main

# Crear rama de feature
git checkout -b feature/nombre-descriptivo

# Ejemplo
git checkout -b feature/add-product-filter
git checkout -b feature/css-refactor
git checkout -b feature/user-auth
```

### Hacer commits significativos

```bash
# Buenas prácticas
git add archivo-especifico.js
git commit -m "feat: add product filter component"

# Ejemplos
git commit -m "fix: resolve CORS error in API calls"
git commit -m "style: refactor CSS variables usage"
git commit -m "docs: update README with setup instructions"
git commit -m "test: add unit tests for Prenda model"
```

### Subir cambios

```bash
# Primera vez en la rama
git push -u origin feature/nombre-descriptivo

# Siguientes veces
git push

# Forzar push (solo si sabes qué haces)
git push --force-with-lease
```

### Crear Pull Request

```bash
# En GitHub, crear PR desde feature a main/develop
# Incluir descripción clara de cambios
# Referenciar issues: "Fixes #123"
```

### Fusionar cambios

```bash
# Una vez aprobado el PR
git checkout main
git pull origin main
git merge feature/nombre-descriptivo
git push origin main
```

---

## ✍️ Estándares de Código

### Python (Backend)

```python
# ✅ Bueno
class Prenda(models.Model):
    """Modelo de prenda de ropa."""
    
    nombre = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.nombre
    
    class Meta:
        ordering = ['-fecha_creacion']
        verbose_name_plural = 'Prendas'


# ❌ Malo
class Prenda(models.Model):
    n = models.CharField(max_length=100)
    p = models.DecimalField(max_digits=10, decimal_places=2)
```

**Convenciones:**
- Nombres descriptivos en snake_case
- Docstrings para clases y funciones
- Máximo 79 caracteres por línea
- 4 espacios de indentación

### JavaScript/React (Frontend)

```javascript
// ✅ Bueno
export function PrendaCard({ prenda, onSelect }) {
  const { nombre, precio, imagen } = prenda;
  
  const handleClick = () => {
    onSelect(prenda.id);
  };
  
  return (
    <div className="prenda-card" onClick={handleClick}>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="precio">${precio}</p>
    </div>
  );
}


// ❌ Malo
export function PC({ p, s }) {
  return (
    <div onClick={() => s(p.id)}>
      <img src={p.i} />
      <h3>{p.n}</h3>
    </div>
  );
}
```

**Convenciones:**
- Nombres descriptivos en camelCase
- Componentes en PascalCase
- Props con destructuring
- Comments solo para lógica compleja

### CSS

```css
/* ✅ Bueno */
.prenda-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-2xl);
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  transition: var(--transition-normal);
}

.prenda-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}


/* ❌ Malo */
.card {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: rgba(30, 30, 45, 0.8);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 12px 30px rgba(201, 169, 75, 0.15);
}
```

**Convenciones:**
- Usar siempre variables CSS
- BEM para nombres de clases (`.bloque__elemento--modificador`)
- Agrupar properties relacionadas
- Móvil-first en media queries

---

## ✅ Testing

### Backend (Django)

```python
# tests.py
from django.test import TestCase
from .models import Prenda, Categoria

class PrendaTestCase(TestCase):
    """Tests para modelo Prenda."""
    
    def setUp(self):
        """Configuración de tests."""
        self.categoria = Categoria.objects.create(nombre='Blusas')
        self.prenda = Prenda.objects.create(
            nombre='Blusa Elegante',
            precio=45.00,
            categoria=self.categoria
        )
    
    def test_prenda_str(self):
        """Test del método __str__."""
        self.assertEqual(str(self.prenda), 'Blusa Elegante')
    
    def test_prenda_precio_positivo(self):
        """Test de precio positivo."""
        self.assertGreater(self.prenda.precio, 0)
```

**Ejecutar tests:**
```bash
python manage.py test              # Todos
python manage.py test catalogo     # App específica
python manage.py test catalogo.tests.PrendaTestCase  # Test específico
python manage.py test --verbosity=2  # Con detalles
```

### Frontend (JavaScript)

```javascript
// Component.test.jsx
import { render, screen } from '@testing-library/react';
import { PrendaCard } from './PrendaCard';

describe('PrendaCard', () => {
  it('renders prenda information', () => {
    const prenda = {
      id: 1,
      nombre: 'Blusa',
      precio: 45
    };
    
    render(<PrendaCard prenda={prenda} />);
    
    expect(screen.getByText('Blusa')).toBeInTheDocument();
    expect(screen.getByText('$45')).toBeInTheDocument();
  });
});
```

**Ejecutar tests:**
```bash
npm test                    # Ejecutar tests
npm test -- --coverage      # Con coverage
npm test -- --watch         # En modo watch
```

---

## 🚀 Deployment

### Backend (Producción)

```bash
# 1. Clonar en servidor
git clone <repo> /var/www/donde_yaque
cd /var/www/donde_yaque/backend

# 2. Crear entorno virtual
python -m venv venv
source venv/bin/activate

# 3. Instalar dependencias
pip install -r requirements.txt
pip install gunicorn

# 4. Configurar .env
nano .env
# SECRET_KEY=...
# DEBUG=False
# ALLOWED_HOSTS=tudominio.com

# 5. Migraciones
python manage.py migrate
python manage.py collectstatic --noinput

# 6. Iniciar con Gunicorn
gunicorn core.wsgi:application --bind 0.0.0.0:8000
```

### Frontend (Producción)

```bash
# 1. Build
cd frontend
npm run build

# 2. Servir con nginx/apache
# Copiar contenido de dist/ a servidor web
```

### Con Docker (Opcional)

```dockerfile
# Dockerfile para backend
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
```

```bash
# Build
docker build -t donde_yaque_backend .

# Run
docker run -p 8000:8000 donde_yaque_backend
```

---

## 🐛 Troubleshooting Avanzado

### Backend

#### Debug mode
```python
# En settings.py
DEBUG = True

# Con debugger en views.py
from django.core.debugshopping import set_trace

def mi_vista(request):
    set_trace()  # Se detiene aquí
    ...
```

#### Problemas de importación
```bash
# Verificar path de Python
python -c "import sys; print(sys.path)"

# Limpiar cache de Python
find . -type d -name __pycache__ -exec rm -r {} +
find . -type f -name '*.pyc' -delete
```

#### Problemas de BD
```bash
# Ver migraciones
python manage.py showmigrations

# Revisar una migración específica
python manage.py showmigrations catalogo

# Resetear (cuidado!)
python manage.py migrate catalogo zero
```

### Frontend

#### Caché de Vite
```bash
# Limpiar caché
rm -rf node_modules/.vite

# Reconstruir
npm run dev
```

#### Memory leak en componentes
```javascript
// ✅ Bueno - Cleanup
useEffect(() => {
  const controller = new AbortController();
  
  api.get('/prendas/', { signal: controller.signal })
    .then(res => setData(res.data));
  
  return () => controller.abort();
}, []);


// ❌ Malo - Sin cleanup
useEffect(() => {
  api.get('/prendas/')
    .then(res => setData(res.data));
}, []);
```

---

## 📝 Convenciones de Commit

```
<tipo>(<scope>): <asunto>

<cuerpo>

<pie>
```

**Tipos:**
- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de estilo (formato, semicolons, etc)
- `refactor:` Refactorización sin cambio de función
- `perf:` Mejora de rendimiento
- `test:` Agregar o actualizar tests
- `chore:` Cambios en build o dependencies

**Ejemplo completo:**
```
feat(catalogo): add product filter by price

- Added PriceFilter component
- Updated Catalogo API endpoint to support price range
- Added tests for filter logic

Fixes #42
```

---

## 🔍 Code Review Checklist

Antes de hacer PR, verifica:

- [ ] Código sigue estándares de proyecto
- [ ] Tests pasan (`npm run lint`, `python manage.py test`)
- [ ] No hay hardcoded values (usar variables)
- [ ] Documentación actualizada
- [ ] Commits tienen mensajes significativos
- [ ] No hay archivos de configuración personal
- [ ] Performance es aceptable
- [ ] Responsive en móvil
- [ ] Manejo de errores adecuado

---

## 📚 Recursos Útiles

**Backend:**
- [Django Docs](https://docs.djangoproject.com/)
- [DRF Docs](https://www.django-rest-framework.org/)
- [Django Debug Toolbar](https://django-debug-toolbar.readthedocs.io/)

**Frontend:**
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

**General:**
- [Git Docs](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

---

<div align="center">

**Gracias por contribuir** 🙏

**[← Volver a README](./README.md)**

</div>
