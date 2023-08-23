import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import Inicio from "./componentes/Inicio/Inicio";
import Servicios from "./componentes/Servicios/Servicios";
import Contacto from "./componentes/Contacto/Contacto";
import Checkout from "./componentes/Checkout/Checkout";
/**/
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}


export default App;
