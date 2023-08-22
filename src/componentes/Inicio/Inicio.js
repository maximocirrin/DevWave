import React from "react";
import Checkout from "../Checkout/Checkout";
import "./Inicio.css";

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

function Inicio() {
  const history = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleButtonClick = () => {
    setShowCheckout(true);
  };

  return (
    <main>
      <h1>Vende más con una página web moderna y atractiva</h1>
      <p>
        En nuestra empresa nos encargamos de crear páginas web minimalistas y
        modernas que atraen a tus clientes y aumentan tus ventas.
      </p>
      <button>Contáctanos</button>
      {/* <button onClick={handleButtonClick}>Finalizar Compra</button>
      {showCheckout && (
        <div className="blur-bg">
          <Checkout />
        </div>
      )} */}

 

      <h1 className="titulo">¿Que hacemos en desarrollo web?</h1>

      <div class="container">
        <div class="item">
          <h2>01. Escalabilidad</h2>
          <p>
            Realizamos proyectos pensados para integrar diversas funcionalidades
            a medida que sean requeridas.
          </p>
        </div>
        <div class="item">
          <h2>02. Responsive</h2>
          <p>
            Para una navegación rápida y fácil es necesario crear un sitio web
            se adapte a diversos dispositivos como pc, celulares y tablets,
            manteniendo su estructura y orden. Así cada elemento adapta sus
            proporciones a cualquier pantalla permitiendo una correcta
            visualización.
          </p>
        </div>
        <div class="item">
          <h2>03. Diseño</h2>
          <p>
            Un diseño adaptable además de favorecer la experiencia del usuario
            tiene beneficios para el SEO ya que contribuye al tráfico hacia tu
            web y, por lo tanto, las posibilidades de éxito en el
            posicionamiento orgánico de los buscadores son mayores.
          </p>
        </div>
        <div class="item">
          <h2>04. SEO</h2>
          <p>
            Contenidos fácilmente indexables a Google. Conseguir indexar tu
            contenido a google es fundamental para aparecer en los resultados de
            búsqueda y, por lo tanto, para generar más visitas a tu página web
            con mayores oportunidades de generar conversiones y ventas.
          </p>
        </div>
        <div class="item">
          <h2>05. Autoadministrables</h2>
          <p>
            Esto permite que, una vez online, el propietario del sitio web pueda
            seguir gestionando su sitio. Esto es una ventaja debido a que,
            muchas veces, se requieren actualizaciones periódicas (precios,
            nuevos elementos o, incluso, contenidos).
          </p>
        </div>
      </div>
    </main>
  );
}

export default Inicio;
