import React from "react";
import "./TrabajoItem.css";

function TrabajoItem(props) {
  return(
    <li className="TrabajoItem" style={props.fondo}>
      <p className="TrabajoItem-titulo">{props.titulo}</p>
      <p className="TrabajoItem-p">Categorías: {props.categorias}</p>
      <a  className="TrabajoItem-ruta" href={props.ruta} target="_blank" rel="noopener noreferrer">Ver trabajo</a>
    </li>
  );
}

export { TrabajoItem };