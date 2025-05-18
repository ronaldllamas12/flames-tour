import React from 'react';
import ReservaForm from '../components/ReservaForm';

const Reserva: React.FC = () => {
  return (
    <section className="absolute h-screen min-h-screen  justify-center
      background-image bg-cover bg-center bg-no-repeat bg-gradient-to-b from-black/10 to-black/30 z-"
      style={{ backgroundImage: "url(/imagenes/imagen-reserva.png)" }}>
      <div className="formulario   "><ReservaForm /></div>
      
      
            
    </section>
    
  );
};

export default Reserva;
