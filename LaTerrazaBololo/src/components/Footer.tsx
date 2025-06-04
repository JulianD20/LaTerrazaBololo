import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bebas tracking-wider mb-4">LA TERRAZA DEL BOLOLÓ</h3>
            <p className="text-gray-300 mb-4">
              El mejor lugar para disfrutar deliciosas comidas rápidas en Barranquilla.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="tel:3242080194" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Menú</h3>
            <ul className="space-y-2">
              <li>
                <HashLink smooth to="#perros" className="text-gray-300 hover:text-white transition-colors">
                  Perros
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#hamburguesas" className="text-gray-300 hover:text-white transition-colors">
                  Hamburguesas
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#asados" className="text-gray-300 hover:text-white transition-colors">
                  Asados
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#salchipapas" className="text-gray-300 hover:text-white transition-colors">
                  Salchipapas
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#arepas" className="text-gray-300 hover:text-white transition-colors">
                  Arepas
                </HashLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium">Lunes a Jueves:</span>
                <p>5:00pm - 11:30pm</p>
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Vie-Sáb-Dom y Festivos:</span>
                <p>4:00pm - 12:00am</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Carrera 13c #46-16 La Victoria, Barranquilla</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-red-500 flex-shrink-0" />
                <a href="tel:3242080194" className="text-gray-300 hover:text-white transition-colors">
                  324 208 0194
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-red-500 flex-shrink-0" />
                <a href="mailto:info@laterrazadelbololó.com" className="text-gray-300 hover:text-white transition-colors">
                  info@laterrazadelbololó.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} La Terraza del Bololó. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;