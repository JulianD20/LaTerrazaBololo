import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Inicio', path: '#top' },
    { name: 'Perros', path: '#perros' },
    { name: 'Hamburguesas', path: '#hamburguesas' },
    { name: 'Asados', path: '#asados' },
    { name: 'Salchipapas', path: '#salchipapas' },
    { name: 'Arepas', path: '#arepas' },
    { name: 'Especiales', path: '#especiales' },
    { name: 'Ubicación', path: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <HashLink smooth to="#top" className="flex items-center">
                <span className="font-bebas text-2xl text-white tracking-wider">LA TERRAZA DEL BOLOLÓ</span>
              </HashLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.path}
                  className="text-white hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {link.name}
                </HashLink>
              ))}
              <a
                href="tel:3242080194"
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-red-700 transition-all duration-300"
              >
                <Phone size={16} />
                Domicilios
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                smooth
                to={link.path}
                className="text-white hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </HashLink>
            ))}
            <a
              href="tel:3242080194"
              className="bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 mt-2 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={16} />
              Domicilios: 324 208 0194
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;