import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore, MenuItem } from '../types';

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addItem: (item: MenuItem) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.name === item.name);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
              ),
              total: state.total + item.price,
            };
          }
          return {
            items: [...state.items, { ...item, quantity: 1 }],
            total: state.total + item.price,
          };
        }),
      removeItem: (itemName: string) =>
        set((state) => ({
          items: state.items.filter((i) => i.name !== itemName),
          total: state.total - (state.items.find((i) => i.name === itemName)?.price || 0) * 
            (state.items.find((i) => i.name === itemName)?.quantity || 0),
        })),
      updateQuantity: (itemName: string, quantity: number) =>
        set((state) => {
          const item = state.items.find((i) => i.name === itemName);
          if (!item) return state;
          
          if (quantity === 0) {
            return {
              items: state.items.filter((i) => i.name !== itemName),
              total: state.total - (item.price * item.quantity),
            };
          }
          
          const priceDiff = item.price * (quantity - item.quantity);
          return {
            items: state.items.map((i) =>
              i.name === itemName ? { ...i, quantity } : i
            ),
            total: state.total + priceDiff,
          };
        }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
      skipHydration: false,
    }
  )
);