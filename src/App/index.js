import React from "react";
import { Helmet } from "react-helmet";
import { Cabecera } from "../Cabecera";
import { SobreMi } from "../SobreMi";
import { informacion } from "../SobreMi/informacion";
import { SobreMiItem } from "../SobreMiItem";
import { ConocimientosListado } from "../ConocimientosListado";
import { conocimientos } from "../ConocimientosListado/conocimientos";
import { ConocimientoItem } from "../ConocimientoItem";
import { CertificacionesListado } from "../CertificacionesListado";
import { certificaciones } from "../CertificacionesListado/certificaciones";
import { CertificacionItem } from "../CertificacionItem";
import { TrabajosListado } from "../TrabajosListado";
import { trabajos } from "../TrabajosListado/trabajos";
import { TrabajoItem } from "../TrabajoItem";
import { Contactame } from "../Contactame";
import { Footer } from "../Footer";

function App() {
  let portada = "https://raw.githubusercontent.com/cledesma92/portfolio/master/src/assets/img/portada.png";
  return (
    <React.Fragment>
      <Helmet>
        <meta 
          property="og:title" 
          content="Portfolio Web"  
        />
        <meta 
          property="og:type" 
          content="website"
        />
        <meta 
          property="og:url" 
          content="https://cledesma92.github.io/portfolio/"
        />
        <meta 
          property="og:image" 
          content={portada}
        />
      </Helmet>
      <Cabecera />
      <SobreMi>
        { informacion.map(info => (
          <SobreMiItem 
            key={info.titulo} 
            icono={info.icono} 
            titulo={info.titulo}
            descripcion={info.descripcion}
          />
        ))}
      </SobreMi>
      <ConocimientosListado>
        { conocimientos.map(conocimiento => (
          <ConocimientoItem 
            key={conocimiento.text} 
            titulo={conocimiento.titulo} 
            text={conocimiento.text}
            estilos={conocimiento.estilos}
          />
        ))}
      </ConocimientosListado>
      <CertificacionesListado>
        { certificaciones.map(certificacion => (
          <CertificacionItem 
            key={certificacion.credencial} 
            curso={certificacion.curso}
            entidadEducativa={certificacion.entidadEducativa}
            expedicion={certificacion.expedicion}
            credencial={certificacion.credencial}
            verCredencial={certificacion.verCredencial}
            
          />
        ))}
      </CertificacionesListado>
      <TrabajosListado>
        { trabajos.map(trabajo => (
          <TrabajoItem 
            key={trabajo.titulo} 
            titulo={trabajo.titulo} 
            categorias={trabajo.categorias}
            fondo={trabajo.fondo}
            ruta={trabajo.ruta}
          />
        ))}
      </TrabajosListado>
      <Contactame />
      <Footer />
    </React.Fragment>
  );
}

export default App;
