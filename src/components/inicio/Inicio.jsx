//otras importaciones
import React from "react";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";

//importación de css
import "./Inicio.css";

//importación de componentes
import Tablero from "../componentesEnComponentes/tablero/Tablero";
import Boton from "../componentesEnComponentes/boton/Boton";

function Inicio() {
	const navigate = useNavigate();
	
	const handleEmpezar = () => {
    navigate("/login");
  }
  
	return (
    <div className="contenedorInicio">
      <Tablero />
      <div className="inicio">
        <div className="textInicio">
          <h1 className="text arriba">AJEDREZ</h1>
        </div>
        <div className="img">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="textInicio">
          <h1 className="text abajo">MODO HISTORIA</h1>
        </div>
        <div className="botonInicio">
          <Boton handleEmpezar={handleEmpezar}>EMPEZAR PARTIDA</Boton>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
