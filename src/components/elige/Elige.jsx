// otras importaciones
import React from "react";
import peonBlanco from "../../img/piezas/peonBlanco.svg";
import peonNegro from "../../img/piezas/peonNegro.svg";

// importación de css
import "./Elige.css";

// importaciones de componentes
import Tablero from "../componentesEnComponentes/tablero/Tablero";
import Peon from "../componentesEnComponentes/peon/Peon";

function Elige() {
  // const navigate = useNavigate();
  // const handlePueblo = () => {
  //   navigate("/pueblo");
  // };
  
  return (
    <div className="contenedor">
      <Tablero />
      <div className="elige">
        <Peon className="peon"
          props={peonBlanco}
          onClick={() => {}}
        />
        <div className="contenedorTexto">
          <h2>ELIGE</h2>
          <h2>COLOR</h2>
        </div>
        <Peon className="peon"
          props={peonNegro}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Elige;
