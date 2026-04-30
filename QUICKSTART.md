# 🚀 Guía Rápida de Inicio

> Inicia el proyecto en menos de 5 minutos

---

## ⚡ TL;DR (Lo más rápido posible)

### 1️⃣ Clonar & Preparar Backend
```bash
git clone <repositorio-url>
cd donde_yaque/backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2️⃣ Preparar Frontend (en otra terminal)
```bash
cd donde_yaque/frontend
npm install
npm run dev
```

### 3️⃣ Abre en tu navegador
```
http://localhost:5173
```

---

## 📋 Paso a Paso Detallado

### Prerequisites Check
```bash
# Verificar Python
python --version  # Debe ser 3.12+

# Verificar Node.js
node --version    # Debe ser 18+
npm --version     # Debe ser 9+
```

---

## 🔧 Backend (Django)

### 1. Ir a carpeta backend
```bash
cd backend
```

### 2. Crear entorno virtual
```bash
# Linux/Mac
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate
```

### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 4. Configurar base de datos
```bash
python manage.py migrate
```

### 5. (Opcional) Crear superusuario
```bash
python manage.py createsuperuser
# Username: admin
# Password: tu-contraseña
```

### 6. Ejecutar servidor
```bash
python manage.py runserver

# Accesible en:
# http://localhost:8000/
# Admin en: http://localhost:8000/admin
```

---

## ⚛️ Frontend (React)

### 1. Ir a carpeta frontend (nueva terminal)
```bash
cd frontend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar servidor de desarrollo
```bash
npm run dev

# Accesible en:
# http://localhost:5173/
```

### (Opcional) Comandos útiles
```bash
# Verificar sintaxis
npm run lint

# Build para producción
npm run build

# Ver build localmente
npm run preview
```

---

## 🎨 Sistema de Variables CSS

### Cambiar Paleta de Colores

**Archivo:** `frontend/src/styles/variables.css`

```css
:root {
  /* Cambiar estos valores */
  --color-primary: #d1a84b;
  --color-primary-dark: #b87f2f;
  --color-primary-light: #f2e4a6;
  
  /* Los cambios se aplican automáticamente */
}
```

---

## 🔗 URLs Importantes

| Servicio | URL | Descripción |
|----------|-----|-------------|
| Frontend | http://localhost:5173 | Aplicación web |
| Backend | http://localhost:8000 | Servidor API |
| Admin | http://localhost:8000/admin | Panel administrativo |
| API | http://localhost:8000/api | Endpoints API |

---

## 📚 API Rápida

### Obtener todas las prendas
```bash
curl http://localhost:8000/api/prendas/
```

### Obtener prendas de una categoría
```bash
curl http://localhost:8000/api/prendas/?categoria=1
```

### Buscar prendas
```bash
curl "http://localhost:8000/api/prendas/?search=blusa"
```

### Obtener detalle de prenda
```bash
curl http://localhost:8000/api/prendas/1/
```

### Obtener categorías
```bash
curl http://localhost:8000/api/categorias/
```

---

## 🐛 Problemas Comunes

### ❌ Error: "Port already in use"
```bash
# Para puerto 8000 (Backend)
lsof -ti:8000 | xargs kill -9
# O usar otro puerto
python manage.py runserver 8001

# Para puerto 5173 (Frontend)
npm run dev -- --port 5174
```

### ❌ Error: "ModuleNotFoundError: No module named 'django'"
```bash
# Asegurar que venv está activado
source venv/bin/activate  # Linux/Mac
# o
venv\Scripts\activate      # Windows

# Reinstalar dependencias
pip install -r requirements.txt
```

### ❌ Error: "npm command not found"
```bash
# Instalar Node.js desde https://nodejs.org/
# Luego reinstalar npm si es necesario
npm install -g npm@latest
```

### ❌ Error: CORS error en consola
```
Access to XMLHttpRequest at 'http://localhost:8000/api/...' 
from origin 'http://localhost:5173' has been blocked by CORS policy
```
✅ Solución: Backend ya está configurado para CORS. Asegurate de que está corriendo en `localhost:8000`

---

## 📦 Estructura Base

```
donde_yaque/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── db.sqlite3
│   ├── core/
│   ├── catalogo/
│   └── media/
├── frontend/
│   ├── package.json
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── public/
└── README.md
```

---

## 📄 Archivos Importantes

- **Backend Config:** `backend/core/settings.py`
- **Backend URLs:** `backend/core/urls.py`
- **Frontend Config:** `frontend/vite.config.js`
- **Frontend API Client:** `frontend/src/services/api.js`
- **CSS Variables:** `frontend/src/styles/variables.css`

---

## ✅ Checklist de Verificación

- [ ] Python 3.12+ instalado
- [ ] Node.js 18+ instalado
- [ ] Repositorio clonado
- [ ] Backend - Entorno virtual creado y activado
- [ ] Backend - Dependencias instaladas
- [ ] Backend - Migraciones aplicadas
- [ ] Backend - Servidor corriendo en puerto 8000
- [ ] Frontend - Dependencias instaladas
- [ ] Frontend - Servidor corriendo en puerto 5173
- [ ] Navegador muestra la aplicación
- [ ] API respondiendo en http://localhost:8000/api/

---

## 🎓 Próximos Pasos

1. ✅ Backend corriendo → Explora `http://localhost:8000/admin`
2. ✅ Frontend corriendo → Navega la aplicación en `http://localhost:5173`
3. ✅ Prueba los filtros y búsqueda
4. ✅ Revisa el código fuente para entender la arquitectura
5. ✅ Modifica estilos en `frontend/src/styles/variables.css`
6. ✅ Lee `README.md` para documentación completa

---

## 💡 Tips

**Mantener hot reload:**
- El frontend se actualiza automáticamente al guardar cambios
- El backend necesita recarga manual (Ctrl+C y ejecutar de nuevo)

**Desarrollar eficientemente:**
- Abre dos terminales: una para backend, otra para frontend
- Usa DevTools de navegador (F12) para debuggear
- Usa Django Admin panel para gestionar datos

**Ver logs útiles:**
- Backend: Terminal donde corre `python manage.py runserver`
- Frontend: Consola del navegador (F12 → Console)

---

## 📞 Necesitas ayuda?

1. Revisa `README.md` para documentación completa
2. Mira `REFACTORIZATION_LOG.md` para cambios CSS
3. Abre un issue con detalles del problema
4. Incluye logs de errores y tu entorno

---

<div align="center">

**¡Listo! 🎉**

Ahora puedes:
- 🎨 Personalizar estilos
- 🔧 Agregar prendas en admin
- 🚀 Desarrollar nuevas features

**[← Volver a README](./README.md)**

</div>
