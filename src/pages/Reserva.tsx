import React from 'react';
import ReservaForm from '../components/ReservaForm';

const Reserva: React.FC = () => {
  return (
    <section className="relative h-screen min-h-screen flex items-center justify-center">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagenes/amigos-en-el-viaje-por-carretera-que-se-coloca-en-coche-convertible-67525651.webp" 
          alt="Logo de la empresa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20 max-w-screen-md">
        <div className="text-center mb-8">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            Reserva Ahora!
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Completa el formulario para reservar tu próxima aventura.
          </p>
        </div>

        
      </div>
      <ReservaForm />
    </section>
  );
};

export default Reserva;
