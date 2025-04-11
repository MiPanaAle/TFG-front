import React from 'react'
import './Input.css'

function Input({ children }) {
  return (
    <div className='contenedorInput'>
      <label>{children}</label>
      <input type="text" />
    </div>
  )
}

export default Input;
