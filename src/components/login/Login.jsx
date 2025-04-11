// otras importaciones
import React from "react";
import { useNavigate } from "react-router-dom";


//importación de css
import "./Login.css";

//importacion de componentes
import Boton from "../componentesEnComponentes/boton/Boton";
import Tablero from "../componentesEnComponentes/tablero/Tablero";
import Input from "../componentesEnComponentes/input/Input";
import BtnSinRegistro from "../componentesEnComponentes/btnSinRegistro/BtnSinRegistro";

function Login() {
	const navigate = useNavigate();

	const handleElegir = () => {
		navigate("/elegir");
	};
	
	const handleEmpezar = () => {
    navigate("/login");
  };
	
  return (
    <div className="contenedor">
      <Tablero />
      <div className="login">
        <h1>LOGIN</h1>
        <form className="login">
          <div className="form">
            <div className="input">
              <Input>Alias</Input>
            </div>
            <div className="input">
              <Input>Contraseña</Input>
            </div>
          </div>
          <div className="contenedorBoton">
            <div className="arriba">
              <div className="der">
                <Boton type="submit" onClick={handleEmpezar}>
                  Registrarse
                </Boton>
              </div>
              <div className="izq">
                <Boton type="submit" onClick={handleElegir}>Ingresar</Boton>
              </div>
            </div>
            <div className="abajo">
              <BtnSinRegistro className="btnSinRegistro" type="submit">
                Empezar si registrar
              </BtnSinRegistro>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
