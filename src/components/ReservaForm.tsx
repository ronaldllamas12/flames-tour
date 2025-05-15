import React, { useState } from 'react';

const ReservaForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tour, setTour] = useState('');
  const numeroWhatsApp = '+573022265668'; // Reemplaza con el número de WhatsApp al que quieres enviar los datos

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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="nombre" style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="telefono" style={{ display: 'block', marginBottom: '5px' }}>Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="tour" style={{ display: 'block', marginBottom: '5px' }}>Tour:</label>
        <input
          type="text"
          id="tour"
          value={tour}
          onChange={(e) => setTour(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Reservar</button>
    </form>
  );
};

export default ReservaForm;
