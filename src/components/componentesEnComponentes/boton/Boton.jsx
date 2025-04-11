// impotación de css
import './Boton.css';

function Boton( { onClick, children } ) {
	return (
		<div className='contenedorBoton'>
			<button 
				className='boton'
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	)
}

export default Boton;
