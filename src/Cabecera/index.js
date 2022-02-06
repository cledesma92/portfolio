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
        <div className="cabecera-contenedorTexto">

          <h1 className="contenedorTexto-nombre">Christian</h1>
          <div className="contenedor-github">
            <a className="github" href="https://github.com/cledesma92" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square fa-x"></i>
            </a>
          </div>
          <h1 className="contenedorTexto-apellido">Ledesma</h1>
          <div className="contenedor-linkedin">
            <a className="linkedin" href="https://www.linkedin.com/in/cledesma92/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-1x"></i>
            </a>
          </div>
          <h2 className="contenedorTexto-texto1">FRONT-END REACT</h2>
          <h2 className="contenedorTexto-texto2">DEVELOPER</h2>
          
          <a className="scroll" href="#SobreMi">
            <i className="fas fa-angle-double-down fa-1x"></i>
          </a>
        </div>
        <div className="cabecera-contenerdorFoto">
          <img className="foto" src={Foto} alt="Foto de perfil"></img>
        </div>
        
    </section>
  );
}

export { Cabecera };