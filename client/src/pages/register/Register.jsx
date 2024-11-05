import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    
    // Validación simple
    if (!email || !username || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login"); // Redirige al login después de registrar
    } catch (err) {
      // Manejo de errores
      alert("Error al registrar. Intenta nuevamente.");
      console.error(err);
    }
  };

  // Función para redirigir al login
  const handleLoginRedirect = () => {
    history.push("/login");
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://i.postimg.cc/ncS92tw8/code-programmer-1-upscayl-5x-realesrgan-x4plus.png"
            alt=""
          />
          {/* Botón de Iniciar Sesión */}
          <button 
            className="loginButton" 
            onClick={handleLoginRedirect}
            style={{ zIndex: 10 }} // Asegúrate de que el botón esté al frente
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Cursos de programación ilimitados y mucho más</h1>
        <h2>A partir de $99. Cancela cuando quieras.</h2>
        <p>
          ¿Quieres ver CODE-PROGRAMMER ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="correo electrónico" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              COMENZAR 
            </button>
          </div>
        ) : (
          <form className="input" onSubmit={handleFinish}>
            <input type="text" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" type="submit">
              Registrarse
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
