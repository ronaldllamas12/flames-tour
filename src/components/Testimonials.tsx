import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  avatar: string;
  text: string;
  rating: number;
};

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Pereira, Colombia',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      text: '¡Nuestro viaje al Eje Cafetero fue absolutamente mágico! El itinerario estaba perfectamente equilibrado entre aventura y relajación. Nuestro guía era conocedor y amable, lo que hizo que la experiencia fuera verdaderamente inolvidable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'David Chen',
      location: 'Toronto, Canada',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      text: 'El tour superó todas nuestras expectativas. Desde los alojamientos hasta las visitas guiadas, todo fue de primera clase. Especialmente me encantó el tamaño del grupo pequeño que hizo que la experiencia fuera más personal.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Garcia',
      location: 'Melbourne, Australia',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      text: '¡Qué increíble viaje al desierto del Tatacoa! La atención al detalle y las experiencias culturales fueron excepcionales. Este fue nuestro tercer viaje con Flames Tours, y nunca decepcionan..',
      rating: 4,
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-primary-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros viajeros</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Escucha a nuestros clientes satisfechos sobre sus experiencias inolvidables con Flames Tours.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-500 p-3 rounded-full">
              <Quote size={24} className="text-white" />
            </div>
            
            <div className="pt-4">
              <div key={testimonials[currentIndex].id} className="text-center">
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-accent-500 text-xl">
                      {i < testimonials[currentIndex].rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prev}
              className="bg-white text-primary-600 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="bg-white text-primary-600 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
