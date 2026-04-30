import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores sin exponer información sensible
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // El servidor respondió con un código de error
      console.error(`Error ${error.response.status}: ${error.response.statusText}`);
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      console.error('Error de red: No se pudo conectar con el servidor.');
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;