import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, dates, travelers });
  };

  return (
    <section className="relative h-screen flex items-center">
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
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 transition-transform hover:translate-y-[-4px] duration-300">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Donde</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destino"
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Cuando</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder="Check in - Check out"
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Quienes</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    placeholder="2 Adults"
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="relative flex items-end">
                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
                >
                  <Search size={18} />
                  <span>Buscar</span>
                </button>
              </div>
            </form>
          </div> 
        </div>
      </div>
    </section>
  );
};