import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="location" ref={sectionRef} className="section-animation py-20 bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Encuéntranos
          <div className="h-2 w-24 bg-red-600 mx-auto mt-3"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Barranquilla Colombia" 
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
            <div className="flex items-start space-x-4 mb-6">
              <MapPin size={24} className="text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Dirección</h3>
                <p className="text-gray-300">Carrera 13c #46-16 La Victoria</p>
                <p className="text-gray-300">Barranquilla, Colombia</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-6">
              <Clock size={24} className="text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Horario</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-gray-300 font-medium">Lunes a Jueves:</p>
                    <p className="text-gray-300">5:00pm - 11:30pm</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Vie-Sáb-Dom y Festivos:</p>
                    <p className="text-gray-300">4:00pm - 12:00am</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone size={24} className="text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Domicilios</h3>
                <p className="text-gray-300">
                  <a href="tel:3242080194" className="text-red-400 hover:text-red-300 transition-colors">
                    324 208 0194
                  </a>
                </p>
                <p className="text-gray-300">@laterrazadelbololó</p>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="tel:3242080194" 
                className="w-full block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Pedir Domicilio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;