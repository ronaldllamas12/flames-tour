import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 bg-white" id="contacto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactanos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           ¿Tienes preguntas o estás listo para reservar tu próxima aventura? Contacta con nuestros expertos en viajes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envianos un Mensaje</h3>
            
            <form action="https://formsubmit.co/ronaldllamas17@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false"/>
              <input type="hidden" name="_template" value="table"/>
              <input type="hidden" name="_next" value="http://localhost:5173/#servicios"/>
              <input type="hidden" name="_autoresponse" value="Pronto lo Contactaremos!!"></input>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                    Destino de Interes
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
                  >
                    <option value="">Seleccione un Destino</option>
                    <option value="europe">Eje Cafetero</option>
                    <option value="asia">Santa Marta</option>
                    <option value="americas">San Andres Islas</option>
                    <option value="africa">Medellin</option>
                    <option value="oceania">Desierto del Tatacoa</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Escribe aqui tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors"
              >
                <Send size={18} className="mr-2" />
                ENVIAR
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-primary-600 p-6 md:p-8 rounded-lg shadow-md text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Informacion de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Nuestras Oficinas</h4>
                    <p>123 Conjunto Residencial Iguazu</p>
                    <p>Cartagena, Colombia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">numero de Contacto</h4>
                    <p>Consultas Generales: +57 (555) 123-4567</p>
                    <p>Soprte de Reservas: +57 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">E-mail </h4>
                    <p>ronaldllamas17@gmail.com</p>
                    <p>flames-bookings@Flamestour.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Horario de Atencion</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Lunes - Viernes:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sabados:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingos:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-600">
                  Soporte de viaje de emergencia 24/7 disponible para reservas existentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
