import React from "react";
import "./Contactame.css";

function Contactame() {
  return(
    <section id="Contactame" className="Contactame">
      <h2 className="Contactame-titulo">Contáctame</h2>
      <p>Te puedes comunicar conmigo a través de los siguientes medios:</p>
      <div className="Contactame-contenedor">
        <a href="mailto:cledesma92@outlook.com"> 
          <i className="contacto fas fa-envelope-square fa-3x"></i>
        </a>
        <a href="tel:+543584835211">
          <i className="contacto fas fa-phone-square-alt fa-3x"></i>  
        </a>
      </div>
      <p>Te contestaré a la brevedad.</p>
    </section>
  );
}

export { Contactame };