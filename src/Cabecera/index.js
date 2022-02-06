import React from "react";
import "./Cabecera.css";
import Foto from "../assets/img/Foto.png";


function Cabecera(props) {
  const [openMenu, setOpenMenu] = React.useState(false);
  
  const mostrarMenu = () => {
      setOpenMenu(prevState => !prevState) 
  }

  return(
    <section id="Home" className="cabecera">
        <h2 className="cabecera-titulo">Portfolio</h2>
        <div className="cabecera-botonMenu " onClick={() => mostrarMenu()}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
        
        <div className={`menu ${openMenu && 'menu--desplegar'}`}>
          <ul className={`menu-lista ${openMenu && 'menu-lista-desplegar'}`}>
            <li>
              <a className="menu-item" href="#Home" onClick={() => mostrarMenu()}>Home</a>
            </li>
            <li>
              <a className="menu-item" href="#SobreMi" onClick={() => mostrarMenu()}>Sobre mí</a>
            </li>
            <li>
              <a className="menu-item" href="#Conocimientos" onClick={() => mostrarMenu()}>Conocimientos</a>
            </li>
            <li>
              <a className="menu-item" href="#Certificaciones" onClick={() => mostrarMenu()}>Certificaciones</a>
            </li>
            <li>
              <a className="menu-item" href="#Trabajos" onClick={() => mostrarMenu()}>Trabajos</a>
            </li>
            <li>
              <a className="menu-item" href="#Contactame" onClick={() => mostrarMenu()}>Contáctame</a>
            </li>
          </ul>
        </div>
        <div className="cabecera-bloque"></div>
        <div className="cabecera-contenerdorTexto">
          <h1 className="contenerdorTexto-nombre">Christian</h1>
          <h1 className="contenerdorTexto-apellido">Ledesma</h1>
          <h2 className="contenerdorTexto-texto">FRONT-END REACT</h2>
          <h2 className="contenerdorTexto-texto">DEVELOPER</h2>
        </div>
        <div className="cabecera-contenerdorFoto">
          <img className="foto" src={Foto} alt="Foto de perfil"></img>
        </div>
        <div className="cabecera-contenedor">
          <div className="cabecera-contenedorRedes">
            <a href="https://www.linkedin.com/in/cledesma92/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fa-1x"></i> cledesma92
            </a>
            <a href="https://github.com/cledesma92" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-1x"></i> cledesma92
            </a>
          </div>

          <div className="scroll">
                <a href="#SobreMi">
                    <i className="fas fa-angle-double-down fa-1x"></i>
                </a>
          </div>
        </div>
    </section>
  );
}

export { Cabecera };