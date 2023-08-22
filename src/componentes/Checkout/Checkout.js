import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  return (
    <div className="checkout">
      <h2>Finalizar Compra</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="country">País:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label htmlFor="zip">Código Postal:</label>
        <input
          type="text"
          id="zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />

        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default Checkout;
