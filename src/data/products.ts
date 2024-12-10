import { Product } from '../types/product';

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Arduino UNO R3',
    price: 24.99,
    description: 'Placa Arduino UNO R3 con microcontrolador ATmega328P',
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=600',
    category: 'Arduino',
    subcategory: 'Arduino UNO'
  },
  {
    id: '2',
    name: 'Kit Sensores Arduino',
    price: 34.99,
    description: 'Kit completo de sensores compatibles con Arduino',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=600',
    category: 'Sensores'
  },
  {
    id: '3',
    name: 'Raspberry Pi 4 8GB',
    price: 89.99,
    description: 'Raspberry Pi 4 Model B con 8GB de RAM',
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?auto=format&fit=crop&q=80&w=600',
    category: 'Raspberry Pi',
    subcategory: 'Raspberry Pi 4'
  },
  {
    id: '4',
    name: 'Kit LED RGB 5050',
    price: 12.99,
    description: 'Tira LED RGB 5050 con controlador',
    image: 'https://images.unsplash.com/photo-1573666008508-0e00579b6c0f?auto=format&fit=crop&q=80&w=600',
    category: 'Componentes',
    subcategory: 'LED'
  },
  {
    id: '5',
    name: 'ESP32 DevKit',
    price: 15.99,
    description: 'Placa de desarrollo ESP32 con WiFi y Bluetooth',
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=600',
    category: 'ESP',
    subcategory: 'ESP32'
  },
  {
    id: '6',
    name: 'Multímetro Digital',
    price: 29.99,
    description: 'Multímetro digital profesional',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    category: 'Herramientas',
    subcategory: 'Multímetros'
  }
];