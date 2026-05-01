# 🎀 Donde Yaque - Plataforma de Catálogo de Prendas

> Una elegante plataforma web de catálogo de prendas de ropa con interfaz moderna, responsiva y totalmente funcional. Desarrollado con **Django** (Backend) y **React** (Frontend) con una arquitectura moderna, escalable y completamente refactorizada con sistema centralizado de variables CSS.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-Production%20Ready-brightgreen.svg)
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
- [📡 API Endpoints](#-api-endpoints)
- [🛠 Desarrollo](#-desarrollo)
- [🐛 Troubleshooting](#-troubleshooting)
- [🎯 Mejoras Futuras](#-mejoras-futuras)
- [👨‍💻 Créditos](#-créditos)

---

## 🚀 Quick Start - Inicia en 5 Minutos

Si ya tienes Python 3.12+ y Node.js 18+ instalados:

```bash
# 1. Clonar repositorio
git clone https://github.com/C0D3Robert/donde_yaque.git
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
- ✅ **Sistema de variables CSS centralizado** para fácil personalización
- ✅ **Animaciones suaves** y transiciones fluidas
- ✅ **Breadcrumbs** de navegación intuitivos
- ✅ **Redes sociales integradas** en footer y navbar
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
git clone https://github.com/C0D3Robert/donde_yaque.git

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

Los mismos pasos de [📦 Instalación Completa Paso a Paso](#-instalación-completa-paso-a-paso)

Abre tu navegador en: **http://localhost:5173**

### 🏃 Opción 2: Acceder al Admin Panel

Con ambos servidores corriendo:

```
http://localhost:8000/gestion-catalogo/
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
├── 📄 README.md                   # Este archivo
│
├── 📁 backend/                    # Servidor Django
│   ├── 🔧 manage.py               # CLI de Django
│   ├── 📄 requirements.txt        # Dependencias Python
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
└── 📁 frontend/                   # Aplicación React
    ├── 📄 package.json            # Dependencias npm
    ├── 📄 vite.config.js          # Configuración Vite
    ├── 📄 eslint.config.js        # Configuración ESLint
    ├── 📄 index.html              # Punto de entrada HTML
    │
    ├── 📁 src/
    │   ├── 🎨 App.jsx             # Componente principal
    │   ├── 🎨 main.jsx            # Punto de entrada React
    │   ├── 🎨 index.css           # Estilos globales
    │   ├── 🎨 App.css             # Estilos App
    │   ├── 🎨 theme.js            # Temas y configuración
    │   │
    │   ├── 📁 styles/
    │   │   └── 🎨 variables.css   # Variables CSS centralizadas
    │   │
    │   ├── 📁 components/         # Componentes reutilizables
    │   │   ├── Layout.jsx         # Layout principal
    │   │   ├── Navbar.jsx         # Barra de navegación
    │   │   ├── Hero.jsx           # Sección hero
    │   │   ├── Breadcrumb.jsx     # Migas de pan
    │   │   ├── PrendaCard.jsx     # Tarjeta de producto
    │   │   ├── SeccionPrendas.jsx # Sección de productos
    │   │   ├── SobreMi.jsx        # Sección sobre mí
    │   │   ├── footer.jsx         # Pie de página
    │   │   ├── RedesSociales.jsx  # Links redes sociales
    │   │   │
    │   │   └── 📁 catalogo/       # Componentes específicos catálogo
    │   │       ├── Catalogo.jsx   # Página catálogo
    │   │       ├── Filtro.jsx     # Panel de filtros
    │   │       ├── Cards.jsx      # Grilla de productos
    │   │       └── Titulo.jsx     # Título sección
    │   │
    │   ├── 📁 pages/              # Páginas de la aplicación
    │   │   ├── HomePage.jsx       # Página principal
    │   │   ├── CatalogoPage.jsx   # Página catálogo
    │   │   └── DetallePage.jsx    # Página detalle producto
    │   │
    │   ├── 📁 assets/             # Recursos estáticos
    │   │   ├── logo.jpg
    │   │   ├── hero.png
    │   │   └── slides/*.webp
    │   │
    │   └── 📁 services/
    │       └── api.js             # Cliente API Axios
    │
    └── 📁 public/                 # Archivos públicos
        ├── favicon.svg
        └── icons.svg
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

## 🎯 Mejoras Futuras

### 🔜 Corto Plazo
- [ ] Biblioteca de imagenes en detalles de prendas
- [ ] Sistema de favoritos
- [ ] Reseñas de usuarios
- [ ] Chat integrado para comunicación con personal de venta

### 🔜 Mediano Plazo
- [ ] Sistema de usuarios con autenticación
- [ ] Dashboard de administrador mejorado
- [ ] Estadísticas y análisis

### 🔜 Largo Plazo
- [ ] Aplicación móvil nativa (React Native)
- [ ] Integración con inventario en tiempo real
- [ ] Sistema de recomendaciones AI
- [ ] Multiples idiomas y localización

---

## 👨‍💻 Créditos

### 👤 Desarrollador
- **Robert Costa** - Desarrollador Full Stack

### 🙏 Agradecimientos
- [Django](https://www.djangoproject.com/) - Framework backend
- [React](https://react.dev/) - Biblioteca UI
- [Vite](https://vitejs.dev/) - Bundler frontend
- [Django REST Framework](https://www.django-rest-framework.org/)


## 📞 Soporte

¿Preguntas o problemas?

- 📧 Email: robert.8oficial@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/C0D3Robert/donde_yaque/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/C0D3Robert/donde_yaque/discussions)

---

## 🔄 Últimas Actualizaciones

### v1.0.0 - CSS Refactorization Complete ✨
- ✅ Sistema centralizado de variables CSS
- ✅ Todos los componentes refactorizados
- ✅ Documentación completa actualizada
- ✅ Sistema de troubleshooting mejorado

---

<div align="center">

**Hecho con ❤️ en Django + React**

⭐ Si este proyecto te fue útil, considera dejar una estrella en GitHub.

**[⬆ Volver al inicio](#-donde-yaque---plataforma-de-catálogo-de-prendas)**

</div>
