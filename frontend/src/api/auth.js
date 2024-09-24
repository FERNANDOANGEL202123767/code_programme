// src/api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

// Función para autenticar al usuario
export const authenticateUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; // Devuelve la respuesta (por ejemplo, el token de acceso)
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};
