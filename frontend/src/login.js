// src/Login.js
// IMportar React y useState para manejar el estado del componente.
import React, { useState } from 'react';
// Importar la función de autenticación desde el modulo api/aut.
import { authenticateUser } from './api/auth';

// Define el componente funcional Login.
const Login = () => {
  // Define el estado inicial para als credenciales del usuario y el mensaje de error.
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await authenticateUser(credentials);
      console.log('Usuario Autenticado:', userData);
      // Aquí puedes manejar el token o redirigir al usuario
      // Por ejemplo: localStorage.setItem('token', userData.token);
    } catch (error) {
      setErrorMessage('Autenticación fallida. Por favor intentalo de nuevo.');
      console.error('Autenticación fallida:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
