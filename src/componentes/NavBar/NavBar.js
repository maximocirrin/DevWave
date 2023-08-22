import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className="botonera">Inicio</NavLink>
        <NavLink to="/servicios" className="botonera">Servicios</NavLink>
        <NavLink to="/contacto" className="botonera">Contacto</NavLink>
        <NavLink to="/">
          <img
            src={process.env.PUBLIC_URL + "/DevWave.png"}
            alt="DevWave"
            className="logo"
          />
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
