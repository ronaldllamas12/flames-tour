import React from 'react';
import { Compass, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Compass className="mr-2 text-accent-500" size={28} />
              <span className="text-xl font-bold">Flames Tours</span>
            </div>
            <p className="text-gray-400 mb-6">
                Creando experiencias de viaje inolvidables y recuerdos que duran toda la vida. Tu viaje comienza con nosotros.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-accent-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Enlaces</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-500"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Nosotros', 'Destinos', 'Paquetes Turisticos', 'Blog', 'Contactanos'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2 text-accent-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10"> Destinos Populares</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-500"></span>
            </h3>
            <ul className="space-y-3">
              {['Bali, Indonesia', 'Paris, France', 'Santorini, Greece', 'Tokyo, Japan', 'New York, USA', 'Cape Town, South Africa'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2 text-accent-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Noticias</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-500"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Suscríbete a nuestro boletín para recibir consejos de viaje, ofertas exclusivas e inspiración.
            </p>
            <form className="mb-4" action="https://formsubmit.co/ronaldllamas17@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false"/>
              <input type="hidden" name="_template" value="table"/>
              <input type="hidden" name="_next" value="http://localhost:5173/#Home"/>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className="flex-grow py-2 px-3 bg-gray-800 rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent-500"
                />
                <button 
                  type="submit" 
                  className="bg-accent-500 hover:bg-accent-600 px-4 rounded-r-md transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              Al suscribirte, aceptas recibir correos electrónicos de nosotros. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Flames Tours. Todos los Derechos Reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};