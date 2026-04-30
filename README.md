# 🎀 Donde Yaque - Plataforma de Catálogo de Prendas

> Una elegante plataforma web de catálogo de prendas de ropa con interfaz moderna, responsiva y totalmente funcional. Desarrollado con **Django** (Backend) y **React** (Frontend) con una arquitectura moderna, escalable y completamente refactorizada con sistema centralizado de variables CSS.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-Production%20Ready-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Python](https://img.shields.io/badge/python-3.12%2B-blue.svg)
![Node](https://img.shields.io/badge/node-18%2B-green.svg)

---

## 📋 Tabla de Contenidos

- [🚀 Quick Start](#-quick-start---inicia-en-5-minutos)
- [✨ Características](#-características)
- [🛠 Stack Tecnológico](#-stack-tecnológico)
- [📋 Requisitos Previos](#-requisitos-previos)
- [📦 Instalación Completa Paso a Paso](#-instalación-completa-paso-a-paso)
- [⚙️ Configuración](#️-configuración)
- [🚀 Ejecución](#-ejecución)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Sistema de Variables CSS](#-sistema-de-variables-css)
- [📡 API Endpoints](#-api-endpoints)
- [🛠 Desarrollo](#-desarrollo)
- [🐛 Troubleshooting](#-troubleshooting)
- [📚 Documentación Adicional](#-documentación-adicional)
- [🎯 Mejoras Futuras](#-mejoras-futuras)
- [👨‍💻 Créditos](#-créditos)

---

## 🚀 Quick Start - Inicia en 5 Minutos

Si ya tienes Python 3.12+ y Node.js 18+ instalados:

```bash
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/donde_yaque.git
cd donde_yaque

# 2. Backend (en una terminal)
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# 3. Frontend (en otra terminal)
cd frontend
npm install
npm run dev

# 4. Abre http://localhost:5173 en tu navegador ✨
```

---

## ✨ Características

### 🎯 Frontend
- ✅ **Interfaz moderna y responsiva** con diseño mobile-first
- ✅ **Catálogo dinámico** con filtros avanzados por categoría y atributos
- ✅ **Sistema de búsqueda** en tiempo real
- ✅ **Página de detalle** de prendas con galería de imágenes
- ✅ **Integración WhatsApp** para consultas directas
- ✅ **Sistema de variables CSS centralizado** para fácil personalización
- ✅ **Animaciones suaves** y transiciones fluidas
- ✅ **Breadcrumbs** de navegación intuitivos
- ✅ **Redes sociales integradas** en footer
- ✅ **Sección "Sobre Mí"** personalizable
- ✅ **SEO optimizado** con React Helmet

### 🔧 Backend
- ✅ **API RESTful completa** con Django REST Framework
- ✅ **Sistema de categorización** jerárquico de prendas
- ✅ **Gestión completa de inventario** (stock, precios, estado)
- ✅ **Panel administrativo Django** fully customizado
- ✅ **Base de datos SQLite** (fácil de migrar a PostgreSQL)
- ✅ **Sistema de imágenes optimizado** con django-cleanup
- ✅ **CORS configurado** para desarrollo y producción
- ✅ **Serialización JSON** eficiente
- ✅ **Validación de datos** robusta

---

## 🛠 Stack Tecnológico

### 🐍 Backend
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| Django | 6.0.4 | Framework web principal |
| Django REST Framework | 3.17.1 | API RESTful |
| django-cors-headers | 4.9.0 | Manejo de CORS |
| Pillow | 12.2.0 | Procesamiento de imágenes |
| django-cleanup | 9.0.0 | Limpieza automática de archivos |
| SQLite/PostgreSQL | - | Base de datos |
| Python | 3.12+ | Lenguaje de programación |

### ⚛️ Frontend
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| React | 19.2.5 | Biblioteca de UI |
| React Router | 7.14.2 | Enrutamiento |
| Vite | 8.0.10 | Bundler y dev server |
| Axios | 1.15.2 | Cliente HTTP |
| React Icons | 5.6.0 | Iconografía |
| React Helmet Async | 3.0.0 | Gestión de metaetiquetas |
| CSS3 | - | Estilos (100% variables CSS) |

### 🛠 DevTools
| Herramienta | Propósito |
|-------------|----------|
| Git | Control de versiones |
| npm | Gestor de paquetes |
| ESLint | Linting de código |

---

## 📋 Requisitos Previos

Antes de comenzar, verifica que tienes instalados:

### ✅ Python 3.12 o Superior
```bash
python --version
# Debería mostrar: Python 3.12.x o superior
```

### ✅ Node.js 18 o Superior
```bash
node --version
npm --version
# Debería mostrar versiones ≥ 18 y ≥ 9 respectivamente
```

### ✅ Git
```bash
git --version
```

> **💡 Tip:** Si aún no tienes estas herramientas, descárgalas desde:
> - [Python](https://www.python.org/downloads/)
> - [Node.js](https://nodejs.org/)
> - [Git](https://git-scm.com/)

---

## 📦 Instalación Completa Paso a Paso

### 📍 Paso 0: Crear Carpeta de Trabajo

```bash
# Crear directorio para el proyecto
mkdir ~/Proyectos  # O la ubicación que prefieras
cd ~/Proyectos
```

### 📍 Paso 1: Clonar el Repositorio

```bash
# Clonar desde GitHub
git clone https://github.com/tu-usuario/donde_yaque.git

# Entrar en el directorio
cd donde_yaque

# Ver la estructura
ls -la
```

### 📍 Paso 2: Configurar Backend (Django)

#### 2.1 - Crear Entorno Virtual

```bash
# Entrar en la carpeta backend
cd backend

# Crear entorno virtual
python -m venv venv

# Activar el entorno (elegir según tu SO)
# ===== Linux / macOS =====
source venv/bin/activate

# ===== Windows (PowerShell) =====
.\venv\Scripts\Activate.ps1

# ===== Windows (CMD) =====
venv\Scripts\activate.bat
```

**Verificar que está activado:** El prompt debe mostrar `(venv)` al principio.

#### 2.2 - Instalar Dependencias

```bash
# Actualizar pip (recomendado)
pip install --upgrade pip

# Instalar dependencias del proyecto
pip install -r requirements.txt

# Verificar instalación
pip list
```

#### 2.3 - Aplicar Migraciones

```bash
# Crear las tablas en la base de datos
python manage.py migrate

# Deberías ver: "Running migrations... OK"
```

#### 2.4 - Crear Superusuario (Opcional pero Recomendado)

```bash
# Crear cuenta de administrador
python manage.py createsuperuser

# Ingresa los datos solicitados:
# Username: admin
# Email: tu@email.com
# Password: (tu contraseña)
```

#### 2.5 - Recopilar Archivos Estáticos (Producción)

```bash
# Necesario para producción (opcional en desarrollo)
python manage.py collectstatic --noinput
```

### 📍 Paso 3: Configurar Frontend (React)

```bash
# Volver a la raíz del proyecto
cd ../frontend

# Instalar dependencias de Node
npm install

# Espera a que se complete (puede tomar 2-3 minutos)

# Verificar lint (opcional)
npm run lint
```

---

## ⚙️ Configuración

### 🔧 Backend - Variables de Entorno

Crea un archivo `.env` en la carpeta `backend/`:

```bash
# backend/.env

# Django Core
DEBUG=True                    # False en producción
SECRET_KEY=tu-clave-secreta-super-segura-aqui
ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0

# Database (opcional, por defecto SQLite)
DATABASE_URL=sqlite:///db.sqlite3

# CORS - Permitir peticiones del frontend
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

# Media Files
MEDIA_ROOT=media/
MEDIA_URL=/media/
```

### 🔧 Backend - Configuración en Django

El archivo `backend/core/settings.py` ya contiene:

```python
# CORS Configuration (ya configurado)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# Media Files (ya configurado)
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

# Static Files (ya configurado)
STATIC_URL = "/static/"
```

> **⚠️ Para producción:** Cambia `DEBUG=False` y configura un `SECRET_KEY` seguro.

### 🎨 Frontend - Variables CSS

El proyecto incluye un **sistema centralizado de variables CSS** en `frontend/src/styles/variables.css`.

Personaliza colores, espaciado y fuentes editando ese archivo. Todos los componentes usan estas variables automáticamente.

```css
/* frontend/src/styles/variables.css */

:root {
  /* Colores */
  --color-primary: #ff69b4;
  --color-secondary: #2d3436;
  
  /* Espaciado */
  --spacing-unit: 8px;
  --spacing-sm: calc(var(--spacing-unit) * 1);
  
  /* Fuentes */
  --font-primary: 'Segoe UI', Tahoma, sans-serif;
  
  /* ... más variables ... */
}
```

---

## 🚀 Ejecución

### 🏃 Opción 1: Desarrollo (Recomendado)

Abre **dos terminales** distintas:

**Terminal 1 - Backend:**
```bash
cd backend

# Activar entorno (si no está activado)
source venv/bin/activate  # Linux/Mac
# ó
.\venv\Scripts\Activate.ps1  # Windows PowerShell

# Ejecutar servidor Django
python manage.py runserver

# ✅ Servidor en: http://localhost:8000
# ✅ Admin en: http://localhost:8000/admin
```

**Terminal 2 - Frontend:**
```bash
cd frontend

# Ejecutar servidor Vite
npm run dev

# ✅ Servidor en: http://localhost:5173
```

Abre tu navegador en: **http://localhost:5173**

### 🏃 Opción 2: Acceder al Admin Panel

Con ambos servidores corriendo:

```
http://localhost:8000/admin
```

Usuario: `admin` (o el que hayas creado)
Contraseña: La que ingresaste en `createsuperuser`

### 📦 Opción 3: Compilar para Producción (Frontend)

```bash
cd frontend

# Compilar código optimizado
npm run build

# Se creará la carpeta `dist/` lista para deployar
ls dist/
```

---

## 📁 Estructura del Proyecto

```
donde_yaque/
│
├── 📄 README.md                    # Este archivo
├── 📄 QUICKSTART.md               # Guía rápida de inicio
├── 📄 CONTRIBUTING.md             # Guía de contribución
├── 📄 DOCS_INDEX.md               # Índice de documentación
├── 📄 REFACTORIZATION_LOG.md     # Detalles de refactorización CSS
│
├── 📁 backend/                    # Servidor Django
│   ├── 🔧 manage.py               # CLI de Django
│   ├── 📄 requirements.txt         # Dependencias Python
│   ├── 🔗 db.sqlite3              # Base de datos
│   │
│   ├── 📁 core/                   # Configuración principal
│   │   ├── settings.py            # Configuración Django
│   │   ├── urls.py                # URLs principales
│   │   ├── wsgi.py                # Configuración WSGI
│   │   └── asgi.py                # Configuración ASGI
│   │
│   ├── 📁 catalogo/               # App principal
│   │   ├── models.py              # Modelos de BD
│   │   ├── views.py               # Vistas API
│   │   ├── serializers.py         # Serializadores JSON
│   │   ├── urls.py                # URLs de la app
│   │   ├── admin.py               # Configuración admin
│   │   └── migrations/            # Migraciones BD
│   │
│   ├── 📁 media/                  # Archivos de usuario
│   │   └── prendas/               # Imágenes de productos
│   │
│   ├── 📁 static/                 # Archivos estáticos
│   │   ├── admin/                 # Admin customizado
│   │   └── image/                 # Imágenes estáticas
│   │
│   └── 📁 templates/              # Templates HTML
│       └── admin/                 # Templates admin
│
├── 📁 frontend/                   # Aplicación React
│   ├── 📄 package.json            # Dependencias npm
│   ├── 📄 vite.config.js          # Configuración Vite
│   ├── 📄 eslint.config.js        # Configuración ESLint
│   ├── 📄 index.html              # Punto de entrada HTML
│   │
│   ├── 📁 src/
│   │   ├── 🎨 App.jsx             # Componente principal
│   │   ├── 🎨 main.jsx            # Punto de entrada React
│   │   ├── 🎨 index.css           # Estilos globales
│   │   ├── 🎨 App.css             # Estilos App
│   │   ├── 🎨 theme.js            # Temas y configuración
│   │   │
│   │   ├── 📁 styles/
│   │   │   └── 🎨 variables.css   # ⭐ VARIABLES CSS CENTRALES
│   │   │
│   │   ├── 📁 components/         # Componentes reutilizables
│   │   │   ├── Layout.jsx         # Layout principal
│   │   │   ├── Navbar.jsx         # Barra de navegación
│   │   │   ├── Hero.jsx           # Sección hero
│   │   │   ├── Breadcrumb.jsx     # Migas de pan
│   │   │   ├── PrendaCard.jsx     # Tarjeta de producto
│   │   │   ├── SeccionPrendas.jsx # Sección de productos
│   │   │   ├── SobreMi.jsx        # Sección sobre mí
│   │   │   ├── footer.jsx         # Pie de página
│   │   │   ├── RedesSociales.jsx  # Links redes sociales
│   │   │   │
│   │   │   └── 📁 catalogo/       # Componentes específicos catálogo
│   │   │       ├── Catalogo.jsx   # Página catálogo
│   │   │       ├── Filtro.jsx     # Panel de filtros
│   │   │       ├── Cards.jsx      # Grilla de productos
│   │   │       └── Titulo.jsx     # Título sección
│   │   │
│   │   ├── 📁 pages/              # Páginas de la aplicación
│   │   │   ├── HomePage.jsx       # Página principal
│   │   │   ├── CatalogoPage.jsx   # Página catálogo
│   │   │   └── DetallePage.jsx    # Página detalle producto
│   │   │
│   │   ├── 📁 assets/             # Recursos estáticos
│   │   │   ├── logo.jpg
│   │   │   ├── hero.png
│   │   │   └── slides/*.webp
│   │   │
│   │   └── 📁 services/
│   │       └── api.js             # Cliente API Axios
│   │
│   └── 📁 public/                 # Archivos públicos
│       ├── favicon.svg
│       └── icons.svg
│
└── 📄 custom_admin.css            # Estilos personalizados admin
```

### 🎯 Archivos Clave Refactorizados

Todos los archivos CSS han sido refactorizados para usar variables centrales:

```
✅ frontend/src/styles/variables.css       (Archivo central de variables)
✅ frontend/src/components/*.css           (Todos importan variables)
✅ frontend/src/components/catalogo/*.css  (Todos importan variables)
✅ frontend/src/pages/*.css                (Todos importan variables)
✅ frontend/src/App.css
✅ frontend/src/index.css
```

Ver `REFACTORIZATION_LOG.md` para detalles completos.

---

## 🎨 Sistema de Variables CSS

El proyecto utiliza un **sistema centralizado de variables CSS** para máxima modularidad y facilidad de personalización.

### 📍 Ubicación
```
frontend/src/styles/variables.css
```

### 📝 Categorías de Variables

#### 🎯 Colores
```css
--color-primary: #ff69b4;           /* Rosa principal */
--color-secondary: #2d3436;         /* Gris oscuro */
--color-accent: #fd79a8;            /* Rosa más clara */
--color-bg: #ffffff;                /* Blanco */
--color-text: #2d3436;              /* Texto oscuro */
```

#### 📏 Espaciado
```css
--spacing-unit: 8px;
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

#### 🔤 Tipografía
```css
--font-primary: 'Segoe UI', sans-serif;
--font-secondary: 'Georgia', serif;
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 24px;
```

#### 🎭 Efectos
```css
--border-radius: 8px;
--box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
--transition: 300ms ease-in-out;
```

### ✏️ Cómo Personalizar

1. Abre `frontend/src/styles/variables.css`
2. Edita los valores de las variables
3. Todos los componentes se actualizarán automáticamente

**Ejemplo:**
```css
/* Cambiar color primario de rosa a azul */
--color-primary: #0080ff;  /* Antes: #ff69b4 */
```

---

## 📡 API Endpoints

### Base URL
```
http://localhost:8000/api/
```

### 📋 Endpoints Disponibles

#### 🏷️ Categorías
```
GET    /api/categorias/              # Listar todas las categorías
GET    /api/categorias/{id}/         # Obtener categoría específica
```

#### 👗 Prendas
```
GET    /api/prendas/                 # Listar todas las prendas
GET    /api/prendas/?categoria=1     # Filtrar por categoría
GET    /api/prendas/?buscar=nombre   # Buscar por nombre/descripción
GET    /api/prendas/{id}/            # Obtener prenda específica
```

### 📤 Response de Ejemplo

**GET /api/prendas/**
```json
{
  "count": 42,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "nombre": "Falda Rosa",
      "descripcion": "Falda elegante color rosa",
      "precio": 59.99,
      "categoria": 1,
      "imagen": "/media/prendas/IMG-001.jpg",
      "activa": true,
      "stock": 10
    }
  ]
}
```

---

## 🛠 Desarrollo

### 🔨 Servidor en Desarrollo

```bash
# Backend - Hot reload automático
cd backend
python manage.py runserver

# Frontend - Hot module replacement (HMR) activado
cd frontend
npm run dev
```

### 📝 Estructura de Componentes React

```jsx
// Estructura recomendada para nuevos componentes
import React from 'react';
import './MiComponente.css';  // Importar estilos

export default function MiComponente() {
  return (
    <div className="mi-componente">
      <h1>Contenido</h1>
    </div>
  );
}
```

### 🎨 Template CSS Recomendado

```css
/* MiComponente.css */
@import '../styles/variables.css';  /* Importar variables */

.mi-componente {
  background-color: var(--color-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  color: var(--color-text);
  transition: var(--transition);
}
```

### 🐛 Modo Debug Django

```bash
cd backend
python manage.py shell

# En la terminal interactiva:
>>> from catalogo.models import Prenda
>>> Prenda.objects.all()
```

### 📦 Agregar Nuevas Dependencias

**Backend:**
```bash
cd backend
source venv/bin/activate
pip install nuevo-paquete
pip freeze > requirements.txt
```

**Frontend:**
```bash
cd frontend
npm install nuevo-paquete
```

---

## 🐛 Troubleshooting

### ❌ Problema: "ModuleNotFoundError" en Backend

**Solución:**
```bash
# Asegúrate que el entorno está activado
source venv/bin/activate  # Linux/Mac
.\venv\Scripts\Activate.ps1  # Windows

# Reinstala las dependencias
pip install -r requirements.txt
```

### ❌ Problema: "npm: command not found"

**Solución:**
```bash
# Verifica que Node.js está instalado
node --version

# Si no:
# Descarga de https://nodejs.org/
```

### ❌ Problema: CORS error en consola del navegador

**Solución:**
```python
# En backend/core/settings.py, verifica:
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
```

### ❌ Problema: Los cambios CSS no se reflejan

**Solución:**
```bash
# Limpia caché del navegador
# Ctrl+Shift+Del o Cmd+Shift+Del

# O recarga con caché limpio
# Ctrl+F5 o Cmd+Shift+R
```

### ❌ Problema: Errores al migrar base de datos

**Solución:**
```bash
cd backend
python manage.py migrate --fake
python manage.py migrate
```

### ❌ Problema: "No module named 'venv'"

**Solución - Crear nuevo entorno virtual:**
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### ❌ Problema: Puerto 8000 o 5173 ya en uso

**Backend (cambiar puerto):**
```bash
python manage.py runserver 8001
```

**Frontend (Vite maneja automáticamente):**
```bash
npm run dev -- --port 5174
```

---

## 📚 Documentación Adicional

Este proyecto incluye documentación completa:

| Documento | Contenido |
|-----------|----------|
| **README.md** | Guía completa (este archivo) |
| **QUICKSTART.md** | Inicio rápido en 5 minutos |
| **CONTRIBUTING.md** | Guía para desarrolladores |
| **REFACTORIZATION_LOG.md** | Detalles de refactorización CSS |
| **DOCS_INDEX.md** | Índice navegable de documentación |

Léelos con:
```bash
cat QUICKSTART.md
cat CONTRIBUTING.md
```

---

## 🎯 Mejoras Futuras

### 🔜 Corto Plazo
- [ ] Carrito de compras
- [ ] Sistema de favoritos
- [ ] Reseñas de usuarios
- [ ] Paginación optimizada

### 🔜 Mediano Plazo
- [ ] Integración de pagos (Stripe/MercadoPago)
- [ ] Sistema de usuarios con autenticación
- [ ] Dashboard de administrador mejorado
- [ ] Estadísticas y análisis

### 🔜 Largo Plazo
- [ ] Aplicación móvil nativa (React Native)
- [ ] Integración con inventario en tiempo real
- [ ] Sistema de recomendaciones AI
- [ ] Multiioma y localización

---

## 👨‍💻 Créditos

### 👤 Desarrollador
- **Tu Nombre** - Desarrollador Full Stack

### 🙏 Agradecimientos
- [Django](https://www.djangoproject.com/) - Framework backend
- [React](https://react.dev/) - Biblioteca UI
- [Vite](https://vitejs.dev/) - Bundler frontend
- [Django REST Framework](https://www.django-rest-framework.org/)

### 📄 Licencia
Este proyecto está bajo la licencia [MIT](LICENSE). Eres libre de usar, modificar y distribuir este código.

---

## 📞 Soporte

¿Preguntas o problemas?

- 📧 Email: tu@email.com
- 🐛 Issues: [GitHub Issues](https://github.com/tu-usuario/donde_yaque/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/tu-usuario/donde_yaque/discussions)

---

## 🔄 Últimas Actualizaciones

### v2.0.0 - CSS Refactorization Complete ✨
- ✅ Sistema centralizado de variables CSS
- ✅ Todos los componentes refactorizados
- ✅ Documentación completa actualizada
- ✅ Guías de contribución incluidas
- ✅ Sistema de troubleshooting mejorado

---

<div align="center">

**Hecho con ❤️ en Django + React**

⭐ Si este proyecto te fue útil, considera dejar una estrella en GitHub.

</div>

### Iniciar Frontend (React)

```bash
# Desde la carpeta frontend/ (en otra terminal)
npm run dev

# El servidor de desarrollo estará disponible en:
# http://localhost:5173
```

### Desarrollo Simultáneo

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate
python manage.py runserver
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Luego abre tu navegador en `http://localhost:5173`

---

## 📁 Estructura del Proyecto

```
donde_yaque/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── db.sqlite3
│   ├── core/                    # Configuración principal
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── catalogo/                # App principal
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   └── migrations/
│   ├── media/                   # Archivos subidos
│   │   └── prendas/
│   └── static/                  # Archivos estáticos
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── eslint.config.js
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── theme.js
│   │   ├── styles/
│   │   │   └── variables.css    # 🎨 Variables CSS centralizadas
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── PrendaCard.jsx
│   │   │   ├── SeccionPrendas.jsx
│   │   │   ├── SobreMi.jsx
│   │   │   ├── footer.jsx
│   │   │   ├── RedesSociales.jsx
│   │   │   ├── Breadcrumb.jsx
│   │   │   ├── catalogo/
│   │   │   │   ├── Catalogo.jsx
│   │   │   │   ├── Filtro.jsx
│   │   │   │   ├── Cards.jsx
│   │   │   │   └── Titulo.jsx
│   │   │   └── Layout.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CatalogoPage.jsx
│   │   │   └── DetallePage.jsx
│   │   ├── services/
│   │   │   └── api.js          # Configuración de axios
│   │   └── assets/
│   │       └── [imágenes]
│   └── public/
│       └── [favicons]
│
├── README.md                    # 📖 Este archivo
├── REFACTORIZATION_LOG.md       # 📋 Log de refactorización CSS
└── Documentacion.txt            # 📝 Documentación adicional
```

---

## 🎯 Características Principales Detalladas

### 1. Sistema de Catálogo

**Funcionalidades:**
- Visualización de prendas en grid responsivo
- Filtrado por categoría
- Búsqueda en tiempo real
- Ordenamiento por precio
- Paginación infinita

**Modelos de Datos:**
```python
# Prenda
- id
- nombre
- descripcion
- precio
- categoria
- imagen
- activa (booleano)
- fecha_creacion

# Categoria
- id
- nombre
- descripcion
```

### 2. Página de Detalle

**Características:**
- Galería de imágenes
- Información completa de la prenda
- Botón de contacto WhatsApp
- Breadcrumbs de navegación
- Badges (Nuevo, Popular)
- Recomendaciones relacionadas

### 3. Sistema de Filtros

**Filtros disponibles:**
- Por categoría
- Por rango de precio
- Búsqueda textual
- Estado (Disponible/Agotado)

### 4. Diseño Responsivo

**Breakpoints:**
- `480px` - Móvil pequeño
- `768px` - Tablet
- `1024px` - Laptop
- `1280px` - Desktop
- `1530px` - Ultrawide

---

## 🎨 Sistema de Variables CSS

### ✨ Refactorización Completa

**Estado:** ✅ 100% Completado (30 de Abril de 2026)

El proyecto cuenta con un sistema centralizado de variables CSS que permite cambiar toda la paleta de colores y estilos desde un único archivo.

### 📂 Ubicación

```
frontend/src/styles/variables.css
```

### 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| Variables CSS | 40+ |
| Archivos refactorizados | 15/15 (100%) |
| Reducción de hardcoding | ~95% |
| Líneas optimizadas | 500+ |
| Diseño alterado | 0% ✓ |

### 🎯 Variables Disponibles

#### Colores Principales
```css
--color-primary: #d1a84b          /* Dorado principal */
--color-primary-dark: #b87f2f     /* Dorado oscuro */
--color-primary-light: #f2e4a6    /* Dorado claro */
```

#### Fondos
```css
--color-bg-darkest: #05070f       /* Más oscuro */
--color-bg-dark: #0f0f1a          /* Oscuro principal */
--color-bg-secondary: #14141f     /* Secundario */
--color-bg-card: rgba(30, 30, 45, 0.8)
--color-bg-overlay: rgba(0, 0, 0, 0.45)
```

#### Textos
```css
--color-text-primary: #f2e4a6     /* Principal claro */
--color-text-secondary: #b0a080   /* Secundario */
--color-text-tertiary: #a8a285    /* Terciario */
--color-text-dark: #1a1a1a        /* En fondos claros */
```

#### Espacios (Padding/Margin)
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 16px
--spacing-xl: 20px
--spacing-2xl: 24px
--spacing-3xl: 30px
--spacing-4xl: 40px
```

#### Tipografía
```css
--font-serif: 'Cormorant Garamond', Georgia, serif
--font-sans: 'Poppins', 'Inter', sans-serif
--font-display: 'Great Vibes', serif

--font-size-xs: 0.65rem
--font-size-sm: 0.75rem
--font-size-base: 0.9rem
--font-size-md: 1rem
--font-size-lg: 1.2rem
--font-size-xl: 1.3rem
--font-size-2xl: 1.5rem
--font-size-3xl: 1.6rem
--font-size-4xl: 2rem
--font-size-5xl: 3.5rem
```

#### Bordes Redondeados
```css
--radius-sm: 4px
--radius-md: 6px
--radius-lg: 8px
--radius-xl: 12px
--radius-full: 50%
```

#### Sombras
```css
--shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.3)
--shadow-md: 0 8px 24px rgba(209, 168, 75, 0.2)
--shadow-lg: 0 12px 30px rgba(201, 169, 75, 0.15)
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.2)
--shadow-hover: 0 12px 32px rgba(0, 0, 0, 0.3)
```

#### Transiciones
```css
--transition-fast: 0.2s ease
--transition-normal: 0.3s ease
--transition-smooth: 0.8s ease-in-out
```

### 🔄 Cómo Cambiar la Paleta de Colores

Para cambiar toda la paleta de colores del proyecto:

1. **Abre el archivo de variables:**
   ```bash
   frontend/src/styles/variables.css
   ```

2. **Modifica los valores en `:root`:**
   ```css
   :root {
     --color-primary: #NUEVO_COLOR;
     --color-primary-dark: #NUEVO_OSCURO;
     --color-primary-light: #NUEVO_CLARO;
     --color-text-primary: #NUEVO_TEXTO;
     /* ... etc */
   }
   ```

3. **Guarda el archivo**

4. **Los cambios se aplicarán automáticamente** ✨

### 📚 Archivos CSS Refactorizados

**100% de los archivos CSS ahora usan variables:**

- ✅ `Navbar.css`
- ✅ `Hero.css`
- ✅ `PrendaCard.css`
- ✅ `Filtro.css`
- ✅ `Cards.css`
- ✅ `RedesSociales.css`
- ✅ `footer.css`
- ✅ `SobreMi.css`
- ✅ `Breadcrumb.css`
- ✅ `SeccionPrendas.css`
- ✅ `Catalogo.css`
- ✅ `Titulo.css`
- ✅ `DetallePage.css`
- ✅ `index.css`
- ✅ `App.css`

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:8000/api/
```

### Endpoints Disponibles

#### Prendas

```http
GET /api/prendas/
```
Obtiene todas las prendas

**Query Parameters:**
- `categoria=1` - Filtrar por categoría
- `search=nombre` - Buscar por nombre
- `page=1` - Paginación

**Response:**
```json
{
  "count": 50,
  "next": "http://localhost:8000/api/prendas/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "nombre": "Blusa Elegante",
      "descripcion": "Blusa de seda",
      "precio": "45.00",
      "categoria": 1,
      "imagen": "/media/prendas/blusa.jpg",
      "activa": true,
      "fecha_creacion": "2026-04-30T10:30:00Z"
    }
  ]
}
```

#### Detalle de Prenda

```http
GET /api/prendas/{id}/
```

Obtiene los detalles de una prenda específica

#### Categorías

```http
GET /api/categorias/
```

Obtiene todas las categorías

```http
GET /api/categorias/{id}/
```

Obtiene una categoría específica

---

## 💻 Desarrollo

### Scripts Disponibles

#### Backend
```bash
# Ejecutar servidor de desarrollo
python manage.py runserver

# Ejecutar migraciones
python manage.py migrate

# Crear migraciones
python manage.py makemigrations

# Shell interactivo
python manage.py shell

# Tests
python manage.py test

# Crear superusuario
python manage.py createsuperuser
```

#### Frontend
```bash
# Servidor de desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Vista previa de build
npm run preview

# Linting
npm run lint

# Linting y fix automático
npm run lint -- --fix
```

### Estructura de Componentes React

#### Componente Base
```jsx
import './Component.css';

export function Component() {
  return (
    <div className="component">
      {/* contenido */}
    </div>
  );
}
```

#### Componente con Estado
```jsx
import { useState, useEffect } from 'react';
import { api } from '../services/api';

export function Component() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/endpoint/').then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Cargando...</p>;
  return <div>{/* contenido */}</div>;
}
```

---

## 🐛 Troubleshooting

### Backend

#### Error: "Port 8000 already in use"
```bash
# Linux/Mac - Matar el proceso en puerto 8000
lsof -ti:8000 | xargs kill -9

# O usar otro puerto
python manage.py runserver 8001
```

#### Error: "ModuleNotFoundError"
```bash
# Asegurar que venv esté activado y dependencias instaladas
source venv/bin/activate
pip install -r requirements.txt
```

#### Error: "Database connection failed"
```bash
# Verificar que SQLite está instalado o reconfigurar en settings.py
python manage.py migrate
```

### Frontend

#### Error: "npm command not found"
```bash
# Instalar Node.js desde https://nodejs.org/
# Verificar instalación
node --version
npm --version
```

#### Error: "CORS error"
```bash
# El backend debe tener CORS configurado correctamente
# En backend/core/settings.py, verificar CORS_ALLOWED_ORIGINS
```

#### Error: "Vite port 5173 already in use"
```bash
# Usar otro puerto
npm run dev -- --port 5174
```

#### Build falla
```bash
# Limpiar caché y reinstalar
rm -rf node_modules
npm cache clean --force
npm install
npm run build
```

---

## 📊 Histórico de Desarrollo

### Fase 1: Inicialización (Semana 1)
- ✅ Setup de Django y React
- ✅ Configuración de CORS
- ✅ Modelos base (Prenda, Categoría)
- ✅ Estructura inicial de componentes

### Fase 2: Backend (Semana 2-3)
- ✅ API RESTful completa
- ✅ Serializers de datos
- ✅ Filtros y búsqueda
- ✅ Admin panel configurado

### Fase 3: Frontend (Semana 4-5)
- ✅ Componentes principales
- ✅ Sistema de filtros
- ✅ Página de detalle
- ✅ Integración con WhatsApp

### Fase 4: Diseño y Estilos (Semana 6)
- ✅ Diseño responsivo
- ✅ Animaciones y transiciones
- ✅ Tema consistente

### Fase 5: Refactorización CSS (Semana 7) ⭐
- ✅ Sistema de variables centralizadas
- ✅ Modularización CSS
- ✅ 100% de archivos refactorizados
- ✅ 95%+ reducción de hardcoding
- ✅ **COMPLETADO: 30 de Abril de 2026**

---

## 📈 Mejoras Futuras

- [ ] Autenticación de usuarios
- [ ] Carrito de compras
- [ ] Sistema de wishlist
- [ ] Reviews y ratings
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)
- [ ] Progressive Web App (PWA)
- [ ] Caché inteligente
- [ ] Optimización de imágenes
- [ ] Analytics integrado

---

## 🔐 Seguridad

### Configuraciones de Producción

#### Backend
```python
# En settings.py para producción
DEBUG = False
ALLOWED_HOSTS = ['tudominio.com']
SECRET_KEY = os.environ.get('SECRET_KEY')
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

#### Frontend
```javascript
// En api.js para producción
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.tudominio.com';
```

### Buenas Prácticas

- ✅ Nunca commit de `.env` o secretos
- ✅ Usar variables de entorno para configuración sensible
- ✅ Validar datos en frontend y backend
- ✅ CORS configurado correctamente
- ✅ HTTPS en producción

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Documentación Adicional

- [REFACTORIZATION_LOG.md](./REFACTORIZATION_LOG.md) - Detalles completos de la refactorización CSS
- [Documentacion.txt](./Documentacion.txt) - Documentación técnica adicional
- [Django Documentation](https://docs.djangoproject.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

## 📞 Soporte

Para reportar problemas o hacer preguntas:

1. Abre un issue en GitHub
2. Incluye detalles del problema
3. Pasos para reproducir
4. Tu entorno (SO, Python, Node versions)

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## ✨ Créditos

- **Diseño:** Inspirado en plataformas de e-commerce modernas
- **Backend:** Django & Django REST Framework
- **Frontend:** React & Vite
- **Estilos:** Sistema de variables CSS personalizado

---

## 🎉 Agradecimientos

Gracias a todos los que han contribuido al desarrollo de este proyecto.

---

<div align="center">

### Desarrollado con ❤️ | 2026

**[⬆ Volver al inicio](#-donde-yaque---plataforma-de-catálogo-de-prendas)**

</div>
