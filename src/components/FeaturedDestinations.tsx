import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { TourModal } from './TourModal';

type Destination = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: string;
};

export const FeaturedDestinations: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const destinations: Destination[] = [
    {
      id: 1,
      name: 'Santorini',
      location: 'Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      rating: 4.8,
      price: '$1,299',
    },
    {
      id: 2,
      name: 'Bali',
      location: 'Indonesia',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
      rating: 4.7,
      price: '$899',
    },
    {
      id: 3,
      name: 'Machu Picchu',
      location: 'Peru',
      image: 'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg',
      rating: 4.9,
      price: '$1,599',
    },
    {
      id: 4,
      name: 'Kyoto',
      location: 'Japan',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
      rating: 4.6,
      price: '$1,199',
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="destinations">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Destinos Populares</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestros destinos más populares y encuentra el lugar perfecto para tu próxima aventura. Desde playas paradisíacas hasta montañas majestuosas, tenemos algo para todos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => setSelectedDestination(destination)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-white text-sm font-medium">Empieza </p>
                      <p className="text-white text-xl font-bold">{destination.price}</p>
                    </div>
                    <button className="bg-accent-500 p-2 rounded-full text-white hover:bg-accent-600 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                    <p className="text-gray-600 flex items-center">
                      <span>{destination.location}</span>
                    </p>
                  </div>
                  <div className="flex items-center bg-primary-600 text-white px-2 py-1 rounded text-sm">
                    <span className="mr-1">{destination.rating}</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <TourModal
          isOpen={selectedDestination !== null}
          onClose={() => setSelectedDestination(null)}
          title={selectedDestination?.name || ''}
          description={selectedDestination?.location || ''}
          image={selectedDestination?.image || ''}
          locations={[]}
          duration=""
          groupSize=""
          rating={selectedDestination?.rating || 0}
          price={selectedDestination?.price || ''}
        />
        
        <div className="text-center mt-10">
          <button className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-2 px-6 rounded-full transition-colors">
            Explora más destinos
          </button>
        </div>
      </div>
    </section>
  );
};
