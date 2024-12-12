// src/Login.js
// Importar React y useState para manejar el estado del componente.
import React, { useState } from 'react';
// Importar la función de autenticación desde el modulo api/aut.
import { authenticateUser } from './api/auth';

// Define el componente funcional Login.
const Login = () => {
  // Define el estado inicial para las credenciales del usuario y el mensaje de error.
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  // Maneja los cambios en los campos de entrada del formulario.
  const handleChange = (e) => {
    // Actualiza las credenciales con los valores introducidos por el usuario.
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Mneja el envio del formulario.
  const handleSubmit = async (e) => {
    // Evita que la página recarge al enviar el formulario.
    e.preventDefault();
    try {
      // Llama a la función authenticateUser para autenticar al usuario.
      const userData = await authenticateUser(credentials);
      console.log('Usuario Autenticado:', userData);
      // Aquí puedes manejar el token o redirigir al usuario
      // Por ejemplo: localStorage.setItem('token', userData.token);
    } catch (error) {
      // Muestra un mensaje de error si la autenticación falla.
      setErrorMessage('Autenticación fallida. Por favor intentalo de nuevo.');
      console.error('Autenticación fallida:', error);
    }
  };

  // Renderiza le formulario e inicio de sesión.
  return (
    <div>
      <h2>Login</h2>
      {/*Musetra el mensaje de error si existe. */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {/* Formulario  para ingresar las credenciales. */}
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre del usuario. */}
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        {/* Campo para la contraseña. */}
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        {/* Botón para enviar el formulario. */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Exporta el componente Login como predeterminado. 
export default Login;
