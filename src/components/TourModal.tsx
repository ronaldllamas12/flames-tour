import React, { useEffect } from 'react';
import { Clock, Map, Users, Star } from 'lucide-react';

type TourModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  locations: string[];
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
};

export const TourModal: React.FC<TourModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  image,
  locations,
  duration,
  groupSize,
  rating,
  price,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center mt-20 shadow-lg">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl mb-20">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
          >
            X
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {locations.map((location) => (
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
              <span>{duration}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Users size={16} className="mr-1 text-primary-600" />
              <span>{groupSize} personas</span>
            </div>
            <div className="flex items-center mb-2">
              <Star size={16} className="mr-1 text-accent-500" />
              <span>{rating} (120+ reviews)</span>
            </div>
          </div>
          <p className="text-xl font-bold text-gray-900">{price}</p>
        </div>
      </div>
    </div>
  );
};
