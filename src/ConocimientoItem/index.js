import React from "react";
import "./ConocimientoItem.css";

function ConocimientoItem(props) {
  return(
    <li className="ConocimientoItem">
      <h3 className="ConocimientoItem-h3">{props.titulo}</h3>
      <p className="ConocimientoItem-p">{props.text}</p>
    </li>
  );
}

export { ConocimientoItem };