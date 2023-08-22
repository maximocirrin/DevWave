import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Servicios.css";

function Servicios() {
  return (
    <main>
      <h1>Nuestros Servicios</h1>
      <ul>
        <li>Diseño y Desarrollo de Páginas Web</li>
        <li>Optimización para Motores de Búsqueda (SEO)</li>
        <li>Gestión de Contenidos</li>
        <li>Desarrollo de Aplicaciones Web</li>
      </ul>
      <NavLink to="/" className="volverAinicio">Volver al Inicio</NavLink>
    </main>
  );
}

export default Servicios;
