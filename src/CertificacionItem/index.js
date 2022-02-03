import React from "react";
import "./CertificacionItem.css";

function CertificacionItem(props) {
  return(
    <li className="CertificacionItem">
      <p className="CertificacionItem-curso">{props.curso}</p>
      
      <p className="CertificacionItem-entidadEducativa">Entidad educativa: {props.entidadEducativa}</p>
      <p className="CertificacionItem-expedicion">Expedición: {props.expedicion}</p>
      
      <p className="CertificacionItem-credencial-titulo">ID de la credencial:</p>
      <p className="CertificacionItem-credencial">{props.credencial}</p>
      
      <a className="CertificacionItem-verCredencial" href={props.verCredencial} target="_blank" rel="noopener noreferrer">Ver credencial</a>
    </li>
  );
}

export { CertificacionItem };