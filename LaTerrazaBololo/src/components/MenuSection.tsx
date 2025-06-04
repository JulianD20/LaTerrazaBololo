import React, { useEffect, useRef } from 'react';
import MenuItem from './MenuItem';
import { MenuItem as MenuItemType } from '../types';

interface MenuSectionProps {
  id: string;
  title: string;
  items: MenuItemType[];
  isEven: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ id, title, items, isEven }) => {
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

  // Get the appropriate background class based on section id
  const getBgClass = () => {
    const classes: { [key: string]: string } = {
      perros: 'bg-gradient-to-r from-red-600 to-red-700',
      hamburguesas: 'bg-gradient-to-r from-orange-600 to-orange-700',
      asados: 'bg-gradient-to-r from-amber-600 to-amber-700',
      salchipapas: 'bg-gradient-to-r from-yellow-600 to-yellow-700',
      mazorcas: 'bg-gradient-to-r from-lime-600 to-lime-700',
      chuzos: 'bg-gradient-to-r from-emerald-600 to-emerald-700',
      bebidas: 'bg-gradient-to-r from-cyan-600 to-cyan-700',
      especiales: 'bg-gradient-to-r from-purple-600 to-purple-700',
      arepas: 'bg-gradient-to-r from-fuchsia-600 to-fuchsia-700',
      adicionales: 'bg-gradient-to-r from-rose-600 to-rose-700'
    };

    return classes[id] || 'bg-gradient-to-r from-gray-600 to-gray-700';
  };

  return (
    <div id={id} ref={sectionRef} className="py-16 section-animation scroll-mt-20">
      <div className={`py-6 px-4 sm:px-8 rounded-3xl mb-10 text-white ${getBgClass()} shadow-xl transform hover:scale-[1.02] transition-transform duration-300`}>
        <h3 className="text-4xl font-bebas tracking-wider text-center">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {items.map((item, index) => (
          <MenuItem
            key={`${id}-${index}`}
            name={item.name}
            description={item.description || ''}
            price={item.price}
            ingredients={item.ingredients}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;