import React from 'react';
import { Clock, Map, Users, Star } from 'lucide-react';

type TourPackage = {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  locations: string[];
};

export const TourPackages: React.FC = () => {
  const packages: TourPackage[] = [
    {
      id: 1,
      title: 'Catedral de Sal',
      description: 'Explora la Catedra de Sal en Zipaquira\' un icono del sitio.',
      image: '/imagenes/catedral de sal.jpg',
      duration: '3 days',
      groupSize: '10-15',
      rating: 4.9,
      price: '$200000',
      locations: ['zipaquira', 'Bogota', 'Cundinamarca'],
    },
    {
      id: 2,
      title: 'Cartagena de Indias',
      description: 'Immersate en la apasionante Historia en la ciudad Amurallada.',
      image: '/imagenes/cartagena.jpg',
      duration: '16 days',
      groupSize: '8-12',
      rating: 4.8,
      price: '$400000',
      locations: ['Cartagena', 'Baru', 'Islas del Rosario'],
    },
    {
      id: 3,
      title: 'El Peñol de Guatape',
      description: 'Admira la impresionante vista desde la cima de la roca.',
      
      image: '/imagenes/el peñol.jpg',
      duration: '18 days',
      groupSize: '10-15',
      rating: 4.7,
      price: '$600000',
      locations: ['Guatape', 'Antioquia', 'Medellin'],
    },
  ];

  return (
    <section className="py-16 bg-white" id="tours">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paquetes Turisticos Exclusivos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros paquetes turísticos cuidadosamente seleccionados para ofrecerte experiencias inolvidables en los destinos más hermosos del mundo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {pkg.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.locations.map((location) => (
                    <span 
                      key={location}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {location}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center mr-4 mb-2">
                    <Clock size={16} className="mr-1 text-primary-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <Users size={16} className="mr-1 text-primary-600" />
                    <span>{pkg.groupSize} personas</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Star size={16} className="mr-1 text-accent-500" />
                    <span>{pkg.rating} (120+ reviews)</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-md transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-2 px-6 rounded-full transition-colors">
            Explora más paquetes
          </button>
        </div>
      </div>
    </section>
  );
};