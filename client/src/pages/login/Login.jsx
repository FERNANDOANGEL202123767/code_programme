import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://i.postimg.cc/ncS92tw8/code-programmer-1-upscayl-5x-realesrgan-x4plus.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Iniciar Sesion</h1>
          <input
            type="email"
            placeholder="correo o numero de telefono"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Iniciar Sesion
          </button>
          <span>
            ¿Eres nuevo en Code? 
            <Link to="/register" style={{ textDecoration: 'none', color: '#8e44ad' }}>
              <b> Regístrate ahora.</b>
            </Link>
          </span>
          <small>
            Esta página está protegida por Google reCAPTCHA para garantizar que no seas un robot. <b>Más información.</b>
          </small>
        </form>
      </div>
    </div>
  );
}