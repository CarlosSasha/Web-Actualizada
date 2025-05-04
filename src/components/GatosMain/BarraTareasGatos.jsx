import React, { useState } from "react";
import "../../styles/GatosMainStyles/BarraTareasGatos.css";

const BarraGatoTareas = () => {
  const [showAlimentos, setShowAlimentos] = useState(false);
  const [showServicios, setShowServicios] = useState(false);

  return (
    <nav className="barra-tareas">
      <ul className="barra-lista">
        <li
          className="barra-item dropdown"
          onMouseEnter={() => setShowAlimentos(true)}
          onMouseLeave={() => setShowAlimentos(false)}
        >
          <a href="#alimentos">Alimentos +</a>
          {showAlimentos && (
            <ul className="dropdown-menu">
              <li><a href="#!">Galletas</a></li>
              <li><a href="#!">Croquetas</a></li>
              <li><a href="#!">Enlatados</a></li>
              <li><a href="#!">Snacks</a></li>
            </ul>
          )}
        </li>

        <li className="barra-item"><a href="#juguetes">Juguetes</a></li>
        <li className="barra-item"><a href="#accesorios">Accesorios</a></li>

        <li
          className="barra-item dropdown"
          onMouseEnter={() => setShowServicios(true)}
          onMouseLeave={() => setShowServicios(false)}
        >
          <a href="#servicios">Servicios +</a>
          {showServicios && (
            <ul className="dropdown-menu">
              <li><a href="#!">Baño</a></li>
              <li><a href="#!">Vacunas y Control Veterinacio</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default BarraGatoTareas