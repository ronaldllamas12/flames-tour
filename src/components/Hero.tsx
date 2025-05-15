import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { tourPackages } from './TourPackages';

export const Hero: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, dates, travelers });
  };

  const destinations = tourPackages.reduce((acc: string[], tour) => {
    tour.locations.forEach(location => {
      if (!acc.includes(location)) {
        acc.push(location);
      }
    });
    return acc;
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagenes/amigos-en-el-viaje-por-carretera-que-se-coloca-en-coche-convertible-67525651.webp" 
          alt="Beautiful beach destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Descubre el Mundo! <span className="text-accent-500">Joyas Ocultas</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Vive aventuras inolvidables con nuestros tours cuidadosamente diseñados y paquetes de viaje exclusivos.
          </p>
          /*
          {/* Search Form */}
        </div>
      </div>
    </section>
  );
};
