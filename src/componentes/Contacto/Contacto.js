import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Contacto.css";

const Contacto = () => {
  return (
    <main className="contacto">
      <h1 className="ContactoTitulo">Contacto</h1>
      <form className="ContactoForm">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit" className="ContactoBtn">
          Enviar Mensaje
        </button>
      </form>
      <NavLink to="/" className="volverAinicio">
        Volver al Inicio
      </NavLink>
    </main>
  )
}

export default Contacto;