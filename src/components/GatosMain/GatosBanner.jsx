import React, { useState } from "react";
import "../../styles/GatosMainStyles/GatosBanner.css";

import Banner1 from '../../assets/images/GatoIMG/GatoBanner1.png';
import Banner2 from '../../assets/images/GatoIMG/GatoBanner2.png';
import Banner3 from '../../assets/images/GatoIMG/GatoBanner3.jpeg';
import Banner4 from '../../assets/images/GatoIMG/GatoBanner4.png';
import Banner5 from '../../assets/images/GatoIMG/GatoBanner5.jpeg';
import Banner6 from '../../assets/images/GatoIMG/GatoBanner6.jpg';

const imagenes = [
  { src: Banner1, texto: "Atención 24/7" },
  { src: Banner2, texto: "Juguetes Variados" },
  { src: Banner3, texto: "Accesorios para Gatos" },
  { src: Banner4, texto: "Vacunas" },
  { src: Banner5, texto: "Higiene y Cuidado" },
  { src: Banner6, texto: "Comida de Marca" },
];

const GatosBanner = () => {
  const [imagenActual, setImagenActual] = useState(0);

  const cambiarImagen = (direccion) => {
    if (direccion === "izquierda") {
      setImagenActual((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    } else {
      setImagenActual((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="banner-container">
      <div className="banner-imagen-principal">
        <button onClick={() => cambiarImagen("izquierda")} className="flecha">◀</button>

        <div style={{ position: "relative" }}>
          <img
            src={imagenes[imagenActual].src}
            alt="Imagen principal"
            className="imagen-grande"
          />
          <div className="texto-sobre-imagen">
            {imagenes[imagenActual].texto}
          </div>
        </div>

        <button onClick={() => cambiarImagen("derecha")} className="flecha">▶</button>
      </div>

      <div className="miniaturas">
        {imagenes.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Miniatura ${index + 1}`}
            className={`miniatura ${index === imagenActual ? "activa" : ""}`}
            onClick={() => setImagenActual(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default GatosBanner