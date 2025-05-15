import React from 'react';
import { Search, Calendar, CreditCard, Plane } from 'lucide-react';

export const BookingProcess: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-accent-500" />,
      title: "Encuentra Tu Destino Perfecto",
      description: "Explora nuestra amplia selección de destinos y paquetes de tour para encontrar tus vacaciones soñadas.."
    },
    {
      icon: <Calendar className="w-12 h-12 text-accent-500" />,
      title: "Selecciona Tus Fechas",
      description: "Selecciona tus fechas de viaje preferidas y verifica la disponibilidad para tu destino elegido."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-accent-500" />,
      title: "Reserva Tu Viaje",
      description: "Completa tu reserva de forma segura y fácil. Nuestro equipo estará contigo en cada paso del camino."
    },
    {
      icon: <Plane className="w-12 h-12 text-accent-500" />,
      title: "Empaca y Vamos!",
      description: "Recibe tu itinerario detallado y documentos de viaje, luego prepárate para tu aventura."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo Funciona</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reservar tus vacaciones de ensueño es simple con nuestro fácil proceso de 4 pasos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md text-center relative transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-colors" onClick={() => window.location.href = '/reserva'}>
            Comienza a planificar tu viaje
          </button>
        </div>
      </div>
    </section>
  );
};
