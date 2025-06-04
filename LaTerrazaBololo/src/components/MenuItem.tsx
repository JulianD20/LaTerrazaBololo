import React from 'react';
import { Plus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  ingredients?: string[];
  delay: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, ingredients, delay }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ name, description, price, ingredients });
  };

  return (
    <div 
      className="menu-item-card bg-gray-800 rounded-xl overflow-hidden shadow-lg relative h-full flex flex-col border border-gray-700"
      style={{ 
        animationDelay: `${delay}s`,
        animation: 'fadeInUp 0.8s ease forwards',
        opacity: 0 
      }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h4 className="text-xl font-bold text-white font-poppins leading-tight">{name}</h4>
          <div className="price-tag bg-red-600 text-white font-bold py-1 px-3 rounded-full whitespace-nowrap flex-shrink-0">
            ${price.toLocaleString()}
          </div>
        </div>
        
        {description && (
          <p className="text-gray-300 text-sm mb-3 flex-grow">{description}</p>
        )}
        
        {ingredients && ingredients.length > 0 && (
          <div className="mt-auto mb-4">
            <div className="flex flex-wrap gap-1.5">
              {ingredients.map((ingredient, idx) => (
                <span 
                  key={idx} 
                  className="inline-block bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
        >
          <Plus size={18} />
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default MenuItem;