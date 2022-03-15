import React from "react";
import "./SobreMi.css";

function SobreMi(props) {
  return(
    <section id="SobreMi" className="SobreMi">
      <div className="SobreMi-bloque"></div>
      <div className="SobreMi-contenedorTexto">
        <h2 className="SobreMi-contenedorTexto-titulo">Hola!</h2>
        <p className="SobreMi-contenedorTexto-parrafo">Yo soy:</p>
      </div>
      <ul className="SobreMi-contenedorItem">
        {props.children}
      </ul>
      <a 
        className="SobreMi-cv" 
        href="https://drive.google.com/file/d/1iHQTjiaBdC58JGwVq-VShAWeOzvX81f4/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Ver currículum
      </a>
    </section>
  );
}

export { SobreMi };