import { Category } from '../types/category';

export const categories: Category[] = [
  {
    name: 'Microcontroladores',
    subcategories: [
      {
        name: 'Arduino',
        subcategories: [
          { name: 'Arduino UNO' },
          { name: 'Arduino Mega' },
          { name: 'Arduino Nano' },
          { name: 'Arduino Pro Mini' }
        ]
      },
      {
        name: 'Raspberry Pi',
        subcategories: [
          { name: 'Raspberry Pi 4' },
          { name: 'Raspberry Pi Zero' },
          { name: 'Raspberry Pi Pico' }
        ]
      },
      {
        name: 'ESP',
        subcategories: [
          { name: 'ESP32' },
          { name: 'ESP8266' }
        ]
      }
    ]
  },
  {
    name: 'Componentes',
    subcategories: [
      {
        name: 'Resistencias',
        subcategories: [
          { name: 'Carbón' },
          { name: 'Película metálica' },
          { name: 'SMD' }
        ]
      },
      {
        name: 'Capacitores',
        subcategories: [
          { name: 'Electrolíticos' },
          { name: 'Cerámicos' },
          { name: 'Tantalio' }
        ]
      },
      {
        name: 'Semiconductores',
        subcategories: [
          { name: 'Transistores' },
          { name: 'Diodos' },
          { name: 'Reguladores' }
        ]
      }
    ]
  },
  {
    name: 'Sensores',
    subcategories: [
      { name: 'Temperatura' },
      { name: 'Humedad' },
      { name: 'Movimiento' },
      { name: 'Presión' },
      { name: 'Luz' }
    ]
  },
  {
    name: 'Herramientas',
    subcategories: [
      { name: 'Soldadura' },
      { name: 'Multímetros' },
      { name: 'Osciloscopios' },
      { name: 'Pinzas' }
    ]
  }
];