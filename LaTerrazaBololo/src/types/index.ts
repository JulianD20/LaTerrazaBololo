export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  ingredients?: string[];
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemName: string) => void;
  updateQuantity: (itemName: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}