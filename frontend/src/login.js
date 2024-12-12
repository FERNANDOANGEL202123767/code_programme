// src/Login.js
import React, { useState } from 'react';
import { authenticateUser } from './api/auth';

const Login = () => {
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
