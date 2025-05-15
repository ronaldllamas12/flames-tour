import React, { useState } from 'react';

const ReservaForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tour, setTour] = useState('');
  const numeroWhatsApp = '+573123456789'; // Reemplaza con el número de WhatsApp al que quieres enviar los datos

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensaje = `
      Nueva Reserva:
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Tour: ${tour}
    `;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="tour">Tour:</label>
        <input
          type="text"
          id="tour"
          value={tour}
          onChange={(e) => setTour(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reservar</button>
    </form>
  );
};

export default ReservaForm;
