import React from "react";
import "./SobreMiItem.css";

function SobreMiItem(props) {
	const [openDescripcion, setOpenDescripcion] = React.useState(false);
  
  const mostrarDescripcion = () => {
      setOpenDescripcion(prevState => !prevState) 
  }
  return(
    <li className="SobreMi-item">
			<div className="SobreMi-itemIcono">
				<i className="fas fa-chevron-circle-down" onClick={() => mostrarDescripcion()}></i>
			</div>
			<p className="SobreMi-itemParrafo" onClick={() => mostrarDescripcion()}>{props.titulo}</p>
			<div className={`SobreMi-itemDescripcion ${openDescripcion && 'SobreMi-itemDescripcion-desplegar'}`}>
				<p>{props.descripcion}</p>    
			</div> 
    </li>
  );
}

export { SobreMiItem };