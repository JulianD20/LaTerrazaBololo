import React, { useState } from 'react';
import { ShoppingCart, X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { isRestaurantOpen } from '../utils/restaurantHours';
import toast from 'react-hot-toast';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: localStorage.getItem('customer-name') || '',
    address: localStorage.getItem('customer-address') || '',
    paymentMethod: localStorage.getItem('payment-method') || 'Efectivo'
  });

  const { items, total, removeItem, updateQuantity, clearCart } = useCartStore();

  const handleCartOpen = () => {
    if (!isRestaurantOpen()) {
      toast.error('Lo sentimos, el restaurante está cerrado. Por favor, realiza tu pedido durante nuestro horario de atención.', {
        duration: 4000,
        position: 'top-center',
      });
      return;
    }
    setIsOpen(true);
  };

  const saveCustomerInfo = () => {
    localStorage.setItem('customer-name', customerInfo.name);
    localStorage.setItem('customer-address', customerInfo.address);
    localStorage.setItem('payment-method', customerInfo.paymentMethod);
  };

  const formatWhatsAppMessage = () => {
    const itemsList = items
      .map(item => `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toLocaleString()})`)
      .join('\n');

    const message = 
      `*¡Nuevo Pedido!*\n\n` +
      `*Productos:*\n${itemsList}\n\n` +
      `*Datos de Entrega:*\n` +
      `- *Nombre:* ${customerInfo.name}\n` +
      `- *Dirección:* ${customerInfo.address}\n` +
      `- *Método de pago:* ${customerInfo.paymentMethod}\n\n` +
      `*Total: $${total.toLocaleString()}*`;

    return encodeURIComponent(message);
  };

  const handleOrder = () => {
    if (!isRestaurantOpen()) {
      toast.error('Lo sentimos, el restaurante está cerrado. Por favor, realiza tu pedido durante nuestro horario de atención.');
      return;
    }

    if (items.length === 0) {
      toast.error('El carrito está vacío');
      return;
    }

    if (!customerInfo.name || !customerInfo.address) {
      toast.error('Por favor completa todos los datos de entrega');
      return;
    }

    saveCustomerInfo();
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/573173779535?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsOpen(false);
    toast.success('¡Tu pedido ha sido enviado!');
  };

  return (
    <>
      <button
        onClick={handleCartOpen}
        className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50"
      >
        <ShoppingCart size={24} />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-gray-900 w-full max-w-md h-full overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Carrito de Compras</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <p className="text-gray-400 text-center py-8">El carrito está vacío</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.name} className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.name)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.name, Math.max(0, item.quantity - 1))}
                            className="text-gray-400 hover:text-white"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                        <span className="text-white">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-white font-bold">${total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg"
                  />
                  <select
                    value={customerInfo.paymentMethod}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, paymentMethod: e.target.value })}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg"
                  >
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                  </select>

                  <button
                    onClick={handleOrder}
                    disabled={!customerInfo.name || !customerInfo.address}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-all duration-300"
                  >
                    Ordenar Ahora
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;