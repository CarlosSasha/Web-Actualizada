import React from "react";
import "../../styles/GatosMainStyles/GatoBody.css";

import Banner1 from '../../assets/images/GatoIMG/BannerAlimentosGato.png';
import Banner2 from '../../assets/images/GatoIMG/BannerJuguetesGatos.jpg';
import Banner3 from '../../assets/images/GatoIMG/BannerAccesoriosGatos.png';
// Alimentos
import Alimentos1 from '../../assets/images/GatoIMG/Alimentos1.jpg';
import Alimentos2 from '../../assets/images/GatoIMG/Alimentos2.jpg';
import Alimentos3 from '../../assets/images/GatoIMG/Alimentos3.jpg';
import Alimentos4 from '../../assets/images/GatoIMG/Alimentos4.jpg';
import Alimentos5 from '../../assets/images/GatoIMG/Alimentos5.jpg';
import Alimentos6 from '../../assets/images/GatoIMG/Alimentos6.jpg';
// Juguetes
import Juguete1 from '../../assets/images/GatoIMG/Juguetes1.jpg';
import Juguete2 from '../../assets/images/GatoIMG/Juguetes2.jpg';
import Juguete3 from '../../assets/images/GatoIMG/Juguetes3.jpg';
import Juguete4 from '../../assets/images/GatoIMG/Juguetes4.jpg';
import Juguete5 from '../../assets/images/GatoIMG/Juguetes5.jpg';
import Juguete6 from '../../assets/images/GatoIMG/Juguetes6.jpg';
// Accesorios
import Accesorio1 from '../../assets/images/GatoIMG/Accesorios1.png';
import Accesorio2 from '../../assets/images/GatoIMG/Accesorios2.jpg';
import Accesorio3 from '../../assets/images/GatoIMG/Accesorios3.jpg';
import Accesorio4 from '../../assets/images/GatoIMG/Accesorios4.jpg';
import Accesorio5 from '../../assets/images/GatoIMG/Accesorios5.jpg';
import Accesorio6 from '../../assets/images/GatoIMG/Accesorios6.jpg';

const Producto = ({ imagen, nombre, precio }) => (
  <div className="producto">
    <img src={imagen} alt={nombre} />
    <div className="info">
      <h3>{nombre}</h3>
      <p><strong>{precio}</strong></p>
      <button> Agregar al Carrito </button>
    </div>
  </div>
)

const GatoBody = () => {
  return (
    <section id="categoria">
    {/*Alimentos*/}
      <img src={Banner1} alt="Banner Alimentos" className="banner-categoria" />
      <h2>Los Más Vendidos</h2>
      <hr className="linea-destacada" />
      <div className="fila-productos">
        <Producto imagen={Alimentos1} nombre="RicoCat 1kg" precio="S/ 11.00" />
        <Producto imagen={Alimentos2} nombre="Friskies 1.5 kg" precio="S/ 15.00" />
        <Producto imagen={Alimentos3} nombre="RicoCat Lata" precio="S/ 5.50" />
        <Producto imagen={Alimentos4} nombre="Felix Travesuras" precio="S/ 11.00" />
        <Producto imagen={Alimentos5} nombre="Barritas Cremi" precio="S/ 10.90" />
        <Producto imagen={Alimentos6} nombre="Cereal NATH 1kg" precio="S/ 20.00" />
        <a href="/Alimentos-gato" className="mostrar-mas">
        Mostrar más... <span className="flecha">➜</span>   
        </a>
      </div>
    {/*Juguetes*/}
      <img src={Banner2} alt="Banner Juguetes" className="banner-categoria" />
      <h2>Los Más Vendidos</h2>
      <hr className="linea-destacada" />
      <div className="fila-productos">
        <Producto imagen={Juguete1} nombre="Ratón Dinamico" precio="S/ 10.00" />
        <Producto imagen={Juguete2} nombre="Mini-Laberinto" precio="S/ 21.00" />
        <Producto imagen={Juguete3} nombre="Ratón de Peluche 2x1" precio="S/ 15.00" />
        <Producto imagen={Juguete4} nombre="Laser Inteligente" precio="S/ 16.90" />
        <Producto imagen={Juguete5} nombre="Dispensador de Comida" precio="S/ 10.50" />
        <Producto imagen={Juguete6} nombre="Pajaro de Peluche" precio="S/ 7.50" />
        <a href="/Juguetes-gato" className="mostrar-mas">
        Mostrar más... <span className="flecha">➜</span>  
        </a>
      </div>
    {/*Accesorios*/}
      <img src={Banner3} alt="Banner Accesorios" className="banner-categoria" />
      <h2>Los Más Vendidos</h2>
      <hr className="linea-destacada" />
      <div className="fila-productos">
        <Producto imagen={Accesorio1} nombre="Casa Colgante" precio="S/ 55.00" />
        <Producto imagen={Accesorio2} nombre="Arenero kit Completo" precio="S/ 45.00" />
        <Producto imagen={Accesorio3} nombre="Lentes de Sol" precio="S/ 10.00" />
        <Producto imagen={Accesorio4} nombre="Arenero Basico" precio="S/ 25.00" />
        <Producto imagen={Accesorio5} nombre="Auto-Refill Agua" precio="S/ 15.00" />
        <Producto imagen={Accesorio6} nombre="Wall-Scartcher" precio="S/ 20.00" />
        <a href="/accesorios-gato" className="mostrar-mas">
        Mostrar más... <span className="flecha">➜</span>
        </a>
      </div>
    </section>
  );
}

export default GatoBody;
