// otras importaciones
import React from "react";

function Peon({ props, onClick }) {
  return (
    <div className="contenedorPeon" onClick={onClick}>
      <img src={props} alt={props} className="peon" />
    </div>
  );
}

export default Peon;
