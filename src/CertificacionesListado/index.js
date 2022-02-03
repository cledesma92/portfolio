import React from "react";
import "./CertificacionesListado.css";

function CertificacionesListado(props) {
  return(
    <section id="Certificaciones" className="CertificacionesListado">
      <h2 className="CertificacionesListado-titulo">Certificaciones</h2>
      <ul className="CertificacionesListado-ul">
        {props.children}
      </ul>
    </section>
  );
}

export { CertificacionesListado };