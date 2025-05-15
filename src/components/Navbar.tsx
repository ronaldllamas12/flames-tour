import React, { useState, useEffect } from 'react';
import { Compass, Flame, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Flame
              className={`mr-2 ${isScrolled ? 'text-primary-600' : 'text-white'}`}
              size={28}
            />
            
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              Flames Tours
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['Home', 'Servicios', 'Tours', 'Nosotros', 'Contacto'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium hover:text-accent-500 transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="hidden md:block">
            <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-4 px-4 rounded-full transition-colors">
              Reserva Ahora!!
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 py-4 px-2 shadow-lg absolute left-4 right-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-3">
              {['Home', 'Servicios', 'Tours', 'Nosotros', 'Contactp'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-accent-500 py-2 px-4 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-2 px-4 rounded-full mt-2 transition-colors">
                Reserva Ahora!!
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
