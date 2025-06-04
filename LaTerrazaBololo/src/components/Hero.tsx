import React, { useEffect } from 'react';
import { ChevronDown, Clock, MapPin, Phone } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { isRestaurantOpen } from '../utils/restaurantHours';

const Hero: React.FC = () => {
  const isOpen = isRestaurantOpen();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-animation').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" 
          alt="Restaurant ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-lime-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-block">
              <div className={`${isOpen ? 'bg-green-600/90' : 'bg-red-600/90'} text-white px-6 py-2 rounded-full text-sm font-medium mb-4 animate-bounce`}>
                {isOpen ? '¡Abierto Ahora!' : 'Cerrado'}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bebas text-white leading-none mb-4 hero-text">
              LA TERRAZA DEL
              <span className="block text-yellow-300 text-7xl md:text-8xl mt-2 drop-shadow-lg">BOLOLÓ</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-6 hero-text" style={{ animationDelay: '0.2s' }}>
              El mejor sabor de la comida rápida en Barranquilla
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-white/90">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Clock className="w-6 h-6 text-yellow-300" />
                <div className="text-sm">
                  <p className="font-medium">Lun-Jue</p>
                  <p>5:00pm - 11:30pm</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin className="w-6 h-6 text-yellow-300" />
                <div className="text-sm">
                  <p className="font-medium">Ubicación</p>
                  <p>La Victoria</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-6 h-6 text-yellow-300" />
                <div className="text-sm">
                  <p className="font-medium">Domicilios</p>
                  <p>324 208 0194</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <HashLink
                smooth
                to="#menu"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hero-button"
              >
                Ver Nuestro Menú
              </HashLink>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 section-animation">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg" 
                alt="Deliciosa hamburguesa" 
                className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg" 
                alt="Perro caliente especial" 
                className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" 
                alt="Plato especial" 
                className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" 
                alt="Ambiente del restaurante" 
                className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20">
        <HashLink smooth to="#menu" className="animate-bounce block">
          <ChevronDown size={36} />
        </HashLink>
      </div>
    </div>
  );
};

export default Hero;