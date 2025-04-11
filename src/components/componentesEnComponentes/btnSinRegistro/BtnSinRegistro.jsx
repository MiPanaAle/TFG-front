import './BtnSinRegistro.css';

function BtnSinRegistro( { onClick, children} ) {
  return (
    <div className='contenedorBtnSR'>
      <button 
        className='btnSR'
        onClick={onClick}  
      >
        {children}
      </button>
    </div>
  )
}

export default BtnSinRegistro;
