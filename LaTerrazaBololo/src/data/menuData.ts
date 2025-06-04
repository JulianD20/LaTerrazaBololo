import { MenuSection } from '../types';

export const menuData: MenuSection[] = [
  {
    id: 'perros',
    title: 'PERROS',
    items: [
      {
        name: 'Sencillo',
        price: 7000,
        ingredients: ['Salchicha', 'Pan', 'Salsas']
      },
      {
        name: 'Sencillo Gratinado',
        price: 8000,
        ingredients: ['Salchicha', 'Pan', 'Queso Gratinado', 'Salsas']
      },
      {
        name: 'Sencillo a la Plancha',
        price: 7000,
        ingredients: ['Salchicha a la Plancha', 'Pan', 'Salsas']
      },
      {
        name: 'Medio Suizo',
        price: 10000,
        ingredients: ['Salchicha', 'Pan', 'Queso Suizo', 'Salsas']
      },
      {
        name: 'Pijuan',
        description: 'Suizo entero',
        price: 15000,
        ingredients: ['Salchicha', 'Pan', 'Queso Suizo Completo', 'Salsas']
      },
      {
        name: 'Rey de Rocha',
        description: 'Italosuizo',
        price: 17000,
        ingredients: ['Salchicha Italiana', 'Pan', 'Queso Suizo', 'Salsas']
      },
      {
        name: 'Italiano',
        description: 'Jamón y Gratinado',
        price: 10000,
        ingredients: ['Salchicha', 'Jamón', 'Pan', 'Queso Gratinado', 'Salsas']
      },
      {
        name: 'Sibanicu',
        description: 'Gemelo',
        price: 10000,
        ingredients: ['Doble Salchicha', 'Pan', 'Salsas']
      },
      {
        name: 'Perro Ganado',
        description: 'Chorizo',
        price: 9000,
        ingredients: ['Chorizo', 'Pan', 'Salsas']
      },
      {
        name: 'Perro Quillero',
        description: 'Butifarra',
        price: 9000,
        ingredients: ['Butifarra', 'Pan', 'Salsas']
      },
      {
        name: 'Perro Rumbón Melón',
        price: 10000,
        ingredients: ['Chorizo', 'Butifarra', 'Pan', 'Salsas']
      },
      {
        name: 'Perro Jeyber',
        description: 'Pollo+Salchicha',
        price: 12000,
        ingredients: ['Pollo', 'Salchicha', 'Pan', 'Salsas']
      },
      {
        name: 'Perro Huracán',
        description: 'Chorizo Premium',
        price: 11000,
        ingredients: ['Chorizo Artesanal', 'Pan', 'Salsas']
      },
      {
        name: 'Perro Super Bololó',
        price: 19000,
        ingredients: ['Pollo', 'Carne', 'Chorizo', 'Butifarra', 'Gratinado', 'Maíz', 'Pan', 'Salsas']
      }
    ]
  },
  {
    id: 'hamburguesas',
    title: 'HAMBURGUESAS',
    items: [
      {
        name: 'Solisfera',
        description: 'Carne',
        price: 13000,
        ingredients: ['Carne', 'Pan', 'Lechuga', 'Tomate', 'Papas Francesas']
      },
      {
        name: 'Galaxia',
        description: 'Carne',
        price: 17000,
        ingredients: ['Carne', 'Pan', 'Lechuga', 'Tomate', 'Queso', 'Papas Francesas']
      },
      {
        name: 'King Night',
        description: 'Pollo',
        price: 14000,
        ingredients: ['Pollo', 'Pan', 'Lechuga', 'Tomate', 'Papas Francesas']
      },
      {
        name: 'Elite',
        description: 'Carne + Tocineta',
        price: 18000,
        ingredients: ['Carne', 'Tocineta', 'Pan', 'Lechuga', 'Tomate', 'Papas Francesas']
      },
      {
        name: 'Raspysta',
        description: 'Doble Carne',
        price: 22000,
        ingredients: ['Doble Carne', 'Pan', 'Lechuga', 'Tomate', 'Papas Francesas']
      },
      {
        name: 'Timba Dragón',
        description: 'Pollo y Carne',
        price: 22000,
        ingredients: ['Pollo', 'Carne', 'Pan', 'Lechuga', 'Tomate', 'Papas Francesas']
      },
      {
        name: 'La Fania',
        description: 'Carne y Suiza',
        price: 25000,
        ingredients: ['Carne', 'Queso Suizo', 'Pan', 'Lechuga', 'Tomate', 'Papas Francesas']
      }
    ]
  },
  {
    id: 'asados',
    title: 'ASADOS',
    items: [
      {
        name: 'Pechuga a la Plancha',
        price: 27000,
        ingredients: ['Pechuga de Pollo', 'Papas Francesas', 'Ensalada']
      },
      {
        name: 'Pechuga Gratinada',
        price: 30000,
        ingredients: ['Pechuga de Pollo', 'Queso Gratinado', 'Papas Francesas', 'Ensalada']
      },
      {
        name: 'Pechuga Media',
        price: 15000,
        ingredients: ['Media Pechuga de Pollo', 'Papas Francesas', 'Ensalada']
      },
      {
        name: 'Carne Media',
        price: 17000,
        ingredients: ['Media Porción de Carne', 'Papas Francesas', 'Ensalada']
      },
      {
        name: 'Carne',
        price: 30000,
        ingredients: ['Carne Asada', 'Papas Francesas', 'Ensalada']
      },
      {
        name: 'Asado Mixto',
        price: 42000,
        ingredients: ['Pollo', 'Carne', 'Chorizo Artesanal', 'Papas Francesas', 'Ensalada']
      }
    ]
  },
  {
    id: 'chuzos',
    title: 'CHUZOS DESGRANADOS',
    items: [
      {
        name: 'El Isleño',
        description: 'Chorizo-Butifarra',
        price: 15000,
        ingredients: ['Chorizo', 'Butifarra', 'Maíz', 'Papas']
      },
      {
        name: 'El Británico',
        description: 'Suiza-Butifarra',
        price: 18000,
        ingredients: ['Queso Suizo', 'Butifarra', 'Maíz', 'Papas']
      },
      {
        name: 'El Master',
        description: 'Suiza-Pollo',
        price: 20000,
        ingredients: ['Queso Suizo', 'Pollo', 'Maíz', 'Papas']
      },
      {
        name: 'Gran Lobo',
        description: 'Cho-Carne',
        price: 20000,
        ingredients: ['Chorizo', 'Carne', 'Maíz', 'Papas']
      },
      {
        name: 'El Coreano Mayor',
        description: 'Pollo-carne-chorizo-butifarra gratinado',
        price: 22000,
        ingredients: ['Pollo', 'Carne', 'Chorizo', 'Butifarra', 'Queso Gratinado', 'Maíz', 'Papas']
      },
      {
        name: 'King Nando',
        description: 'Doble Bollo-Pollo-Carne-Chorizo-Butifarra-Gratinado',
        price: 25000,
        ingredients: ['Doble Bollo', 'Pollo', 'Carne', 'Chorizo', 'Butifarra', 'Queso Gratinado', 'Maíz', 'Papas']
      }
    ]
  },
  {
    id: 'salchipapas',
    title: 'SALCHIPAPAS',
    items: [
      {
        name: 'Sencilla',
        price: 12000,
        ingredients: ['Salchicha', 'Papas Francesas', 'Salsas']
      },
      {
        name: 'Sencilla Gratinada',
        price: 16000,
        ingredients: ['Salchicha', 'Papas Francesas', 'Queso Gratinado', 'Salsas']
      },
      {
        name: 'Suiza',
        price: 18000,
        ingredients: ['Salchicha', 'Papas Francesas', 'Queso Suizo', 'Salsas']
      },
      {
        name: 'La Masusa',
        description: 'Pollo-Salchicha',
        price: 18000,
        ingredients: ['Pollo', 'Salchicha', 'Papas Francesas', 'Salsas']
      },
      {
        name: 'La Makanaky',
        description: 'Chorizo-Butifarra',
        price: 17000,
        ingredients: ['Chorizo', 'Butifarra', 'Papas Francesas', 'Salsas']
      },
      {
        name: 'La Super kike',
        description: 'Pollo-Carne',
        price: 20000,
        ingredients: ['Pollo', 'Carne', 'Papas Francesas', 'Salsas']
      },
      {
        name: 'Bendecido',
        description: 'Suiza-Pollo',
        price: 23000,
        ingredients: ['Pollo', 'Queso Suizo', 'Papas Francesas', 'Salsas']
      },
      {
        name: 'La cazuela',
        description: '2 Personas',
        price: 25000,
        ingredients: ['Salchicha', 'Pollo', 'Chorizo', 'Butifarra', 'Papas Francesas', 'Salsas']
      },
      {
        name: 'La Taquilera',
        description: '3 Personas',
        price: 38000,
        ingredients: ['Salchicha', 'Pollo', 'Carne', 'Chorizo', 'Butifarra', 'Maíz', 'Gratinado', 'Papas Francesas', 'Salsas']
      },
      {
        name: 'La Caimán',
        description: '5 Personas',
        price: 60000,
        ingredients: ['Salchicha', 'Pollo', 'Carne', 'Chorizo', 'Butifarra', 'Maíz', 'Gratinado', 'Tocineta', 'Papas Francesas', 'Salsas']
      }
    ]
  },
  {
    id: 'mazorcas',
    title: 'MAZORCAS',
    items: [
      {
        name: 'Sencilla',
        price: 12000,
        ingredients: ['Mazorca', 'Salsas']
      },
      {
        name: 'Bobinchera',
        description: 'Chorizo - Butifarra',
        price: 17000,
        ingredients: ['Mazorca', 'Chorizo', 'Butifarra', 'Salsas']
      },
      {
        name: 'El Imperio',
        description: 'Salchicha Suiza',
        price: 18000,
        ingredients: ['Mazorca', 'Salchicha', 'Queso Suizo', 'Salsas']
      },
      {
        name: 'Skorpiana',
        description: 'Pollo-Carne-gratinada',
        price: 23000,
        ingredients: ['Mazorca', 'Pollo', 'Carne', 'Queso Gratinado', 'Salsas']
      },
      {
        name: 'Gran Samuel',
        description: 'Pollo-Carne-chorizo-butifarra-gratinado',
        price: 25000,
        ingredients: ['Mazorca', 'Pollo', 'Carne', 'Chorizo', 'Butifarra', 'Queso Gratinado', 'Salsas']
      }
    ]
  },
  {
    id: 'arepas',
    title: 'AREPAS',
    items: [
      {
        name: 'Solo Queso',
        price: 7000,
        ingredients: ['Arepa', 'Queso']
      },
      {
        name: 'Carne',
        price: 8000,
        ingredients: ['Arepa', 'Carne Desmechada']
      },
      {
        name: 'Pollo',
        price: 8000,
        ingredients: ['Arepa', 'Pollo Desmechado']
      },
      {
        name: 'Chorizo',
        price: 8000,
        ingredients: ['Arepa', 'Chorizo']
      },
      {
        name: 'Butifarra',
        price: 8000,
        ingredients: ['Arepa', 'Butifarra']
      },
      {
        name: 'Chicharrón',
        price: 8000,
        ingredients: ['Arepa', 'Chicharrón']
      },
      {
        name: 'Pollo, Carne y Queso',
        price: 11000,
        ingredients: ['Arepa', 'Pollo Desmechado', 'Carne Desmechada', 'Queso']
      },
      {
        name: 'Pollo, Chorizo y Queso',
        price: 11000,
        ingredients: ['Arepa', 'Pollo Desmechado', 'Chorizo', 'Queso']
      },
      {
        name: 'Carne, Chicharrón y Queso',
        price: 11000,
        ingredients: ['Arepa', 'Carne Desmechada', 'Chicharrón', 'Queso']
      },
      {
        name: 'Butifarra, Carne y Queso',
        price: 11000,
        ingredients: ['Arepa', 'Butifarra', 'Carne Desmechada', 'Queso']
      },
      {
        name: 'Chorizo, Butifarra y Chicharrón',
        price: 11000,
        ingredients: ['Arepa', 'Chorizo', 'Butifarra', 'Chicharrón']
      },
      {
        name: 'Francotirador',
        description: 'Carne, Pollo, Chorizo, Butifarra, Chicharrón, Queso, Gratinada',
        price: 22000,
        ingredients: ['Arepa', 'Carne', 'Pollo', 'Chorizo', 'Butifarra', 'Chicharrón', 'Queso', 'Gratinado']
      }
    ]
  },
  {
    id: 'especiales',
    title: 'ESPECIALES',
    items: [
      {
        name: 'Bololó Salchitajada',
        description: 'Tajada de Guineo Verde con Chorizo y Butifarra',
        price: 15000,
        ingredients: ['Tajadas de Guineo Verde', 'Chorizo', 'Butifarra', 'Salsas']
      },
      {
        name: 'Patacón',
        description: 'Carne, Pollo, Chorizo, Butifarra + Gratinado y tocineta',
        price: 24000,
        ingredients: ['Patacón', 'Carne', 'Pollo', 'Chorizo', 'Butifarra', 'Queso Gratinado', 'Tocineta', 'Salsas']
      },
      {
        name: 'Burrito',
        description: 'Carne Esmechada, Pollo Esmechado, Tomate, Pollo, Lechuga, Cebolla y Mozarella',
        price: 15000,
        ingredients: ['Tortilla', 'Carne Desmechada', 'Pollo Desmechado', 'Tomate', 'Lechuga', 'Cebolla', 'Queso Mozzarella']
      },
      {
        name: 'Sandwiches',
        description: '+ Papas a la francesa',
        price: 20000,
        ingredients: ['Pan', 'Pollo', 'Carne', 'Lechuga', 'Tomate', 'Queso Mozzarella', 'Papas Francesas']
      },
      {
        name: 'Picada Chorizo Artesanal',
        description: 'Bollo, Limón, Salsa de Tomate, Tártara',
        price: 8000,
        ingredients: ['Chorizo Artesanal', 'Bollo', 'Limón', 'Salsa de Tomate', 'Salsa Tártara']
      }
    ]
  },
  {
    id: 'adicionales',
    title: 'ADICIONALES',
    items: [
      {
        name: 'Maíz + Gratinado',
        price: 6000,
        ingredients: ['Maíz', 'Queso Gratinado']
      },
      {
        name: 'Gratinado',
        price: 5000,
        ingredients: ['Queso Gratinado']
      },
      {
        name: 'Papas Fritas',
        price: 6000,
        ingredients: ['Papas Francesas']
      },
      {
        name: 'Bollo',
        price: 3000,
        ingredients: ['Bollo de Maíz']
      },
      {
        name: 'Chorizo Artesanal',
        price: 5000,
        ingredients: ['Chorizo Artesanal']
      },
      {
        name: 'Grille Pimentón Cebolla',
        price: 5000,
        ingredients: ['Pimentón', 'Cebolla', 'Grillados']
      }
    ]
  },
  {
    id: 'bebidas',
    title: 'BEBIDAS',
    items: [
      {
        name: 'Gaseosa 1.5',
        price: 10000,
        ingredients: ['Gaseosa 1.5 Litros']
      },
      {
        name: 'Gaseosa 1.5 Postobon',
        price: 8000,
        ingredients: ['Gaseosa Postobon 1.5 Litros']
      },
      {
        name: 'Gaseosa Litro Postobon',
        price: 6000,
        ingredients: ['Gaseosa Postobon 1 Litro']
      },
      {
        name: 'Gaseosa Personal',
        price: 4000,
        ingredients: ['Gaseosa Personal']
      },
      {
        name: 'Jugo de Corozo',
        price: 4000,
        ingredients: ['Jugo de Corozo']
      },
      {
        name: 'Jugo de Corozo Para llevar',
        price: 5000,
        ingredients: ['Jugo de Corozo Para Llevar']
      },
      {
        name: 'Agua',
        price: 3000,
        ingredients: ['Agua Embotellada']
      },
      {
        name: 'Hit Litro',
        price: 6000,
        ingredients: ['Jugo Hit 1 Litro']
      },
      {
        name: 'Hit Personal',
        price: 4000,
        ingredients: ['Jugo Hit Personal']
      },
      {
        name: 'Aguila Negra',
        price: 3500,
        ingredients: ['Cerveza Aguila Negra']
      },
      {
        name: 'Aguila Light',
        price: 3500,
        ingredients: ['Cerveza Aguila Light']
      },
      {
        name: 'Coronita',
        price: 5000,
        ingredients: ['Cerveza Corona Pequeña']
      },
      {
        name: 'Costeña',
        price: 3500,
        ingredients: ['Cerveza Costeña']
      },
      {
        name: 'Limonada',
        price: 10000,
        ingredients: ['Limonada Natural']
      },
      {
        name: 'Limonada Cerezada',
        price: 10000,
        ingredients: ['Limonada con Cereza']
      },
      {
        name: 'Limonada de Coco',
        price: 12000,
        ingredients: ['Limonada con Coco']
      }
    ]
  }
];