import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div className="video">
        <ReactPlayer 
          url={movie.video} 
          playing 
          controls 
          width="100%" 
          height="100%" 
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1, // Oculta el logo de YouTube
                rel: 0, // Evita mostrar videos relacionados al final
                showinfo: 0, // Oculta la información del video
                disablekb: 1, // Desactiva el uso del teclado en el reproductor
              }
            }
          }}
        />
      </div>
    </div>
  );
}
