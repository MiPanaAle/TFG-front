import React from 'react'
import Tablero from './components/tablero/Tablero';
import logo from './img/logo.png';
import Boton from './components/boton/Boton';

function App() {
	return (
		<div>
			<Tablero className='tablero'>
				<div className="enTablero">
					<div className="img">
						<img src={logo} alt="logo" />
					</div>
					<div className="contenedorInicio">
						<Boton className='inicio'>
							Jugar
						</Boton>
					</div>
				</div>
			</Tablero>

		</div>
	)
}

export default App
