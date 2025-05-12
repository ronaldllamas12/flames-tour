import React from 'react';
import { Clock } from 'lucide-react';

type Offer = {
  id: number;
  title: string;
  discount: string;
  image: string;
  validUntil: string;
  code: string;
};

export const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      id: 1,
      title: 'Islas del Rosario',
      discount: '25% OFF',
      image: '/imagenes/Isla-del-Rosario-1024x508.jpg',
      validUntil: 'July 31, 2025',
      code: 'SAI25',
    },
    {
      id: 2,
      title: 'Parque Tayrona',
      discount: '20% OFF',
      image: 'https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg',
      validUntil: 'June 15, 2025',
      code: 'ADVENTURE20',
    },
    {
      id: 3,
      title: 'Cartagena de Indias',
      discount: '30% OFF',
      image: '/imagenes/OIP.jpg',
      validUntil: 'August 31, 2025',
      code: 'CRUISE30',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ofertas Especiales</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aprovecha nuestras ofertas por tiempo limitado y descuentos exclusivos en paquetes de viaje seleccionados. ¡No te lo pierdas!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div 
              key={offer.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="absolute top-4 right-4 bg-accent-500 text-white font-bold py-1 px-3 rounded-full text-sm">
                    {offer.discount}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <div className="flex items-center mb-4 text-sm">
                  <Clock size={16} className="mr-1" />
                  <span>Valida hasta {offer.validUntil}</span>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded border border-white/30 text-center">
                    <p className="text-xs">codigo Promo </p>
                    <p className="font-mono font-bold">{offer.code}</p>
                  </div>
                  <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-2 px-4 rounded transition-colors">
                    Reserva Ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};