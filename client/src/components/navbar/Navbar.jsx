import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://i.postimg.cc/ncS92tw8/code-programmer-1-upscayl-5x-realesrgan-x4plus.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Pagina Principal</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Cursos</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Cursos Intensivos</span>
          </Link>
          <span>Nuevos y Populares</span>
          <span>Mi Lista</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Configuracion</span>
              <span onClick={() => dispatch(logout())}>Cerrar Sesion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
