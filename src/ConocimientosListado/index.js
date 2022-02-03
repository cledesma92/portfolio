import React from "react";
import "./ConocimientosListado.css";

function ConocimientosListado(props) {
  return(
    <section id="Conocimientos" className="ConocimientosListado">
      <h2 className="ConocimientosListado-titulo">Conocimientos</h2>
      <ul className="ConocimientosListado-ul">
        {props.children}
      </ul>
    </section>
  );
}

export { ConocimientosListado };