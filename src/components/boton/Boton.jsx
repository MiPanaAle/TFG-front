import React from 'react';
import './Boton.css';

function Boton({ children }) {
	return (
		<div className='contenedorBoton'>
			<button className='boton'>
				{children}
			</button>
		</div>
	)
}

export default Boton;
