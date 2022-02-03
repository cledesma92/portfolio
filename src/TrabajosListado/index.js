import React from "react";
import "./TrabajosListado.css"


function TrabajosListado(props) {
  return(
    <section id="Trabajos" className="TrabajosListado">
      <h2 className="TrabajosListado-titulo">Trabajos</h2>
      <ul className="TrabajosListado-ul">
        {props.children}
      </ul>
    </section>
  );
}

export { TrabajosListado };