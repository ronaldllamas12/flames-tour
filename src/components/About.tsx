import React from 'react';
import { Globe, Shield, Users, Award } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-10 h-10 text-primary-600" />,
      title: 'Red Nacional',
      description: 'Asociaciones con expertos locales y proveedores de servicios en todo el mundo',
    },
    {
      icon: <Shield className="w-10 h-10 text-primary-600" />,
      title: 'Seguro de Viaje',
      description: 'Protección integral para su tranquilidad durante el viaje',
    },
    {
      icon: <Users className="w-10 h-10 text-primary-600" />,
      title: 'Guías Expertos',
      description: 'Guías locales apasionados y conocedores que enriquecen su experiencia',},
    {
      icon: <Award className="w-10 h-10 text-primary-600" />,
      title: 'Servicios Premium',
      description: 'Acceso a alojamientos de lujo, transporte privado y experiencias exclusivas',},
  ];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg" 
                alt="Team of travel experts" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute w-full h-full top-4 left-4 border-2 border-accent-500 rounded-lg -z-0"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Acerca de Flames Tour</h2>
            <p className="text-lg text-gray-600 mb-6">
              Fundada en 2024, Flames Tours ha crecido de pequeña agencia de turismo a un operador turístico líder que crea experiencias de viaje inolvidables. Nuestra misión es inspirar y permitir a las personas explorar el mundo de una manera que sea tanto enriquecedora como responsable.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Con un equipo de apasionados expertos en viajes, creamos recorridos que van más allá de las atracciones turísticas ordinarias, ofreciendo experiencias auténticas y creando recuerdos duraderos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};