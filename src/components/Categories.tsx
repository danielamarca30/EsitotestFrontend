import React from 'react';
import { Cpu, Component, Battery, Wrench, Zap, CircuitBoard } from 'lucide-react';

const categories = [
  { name: 'Microcontroladores', icon: Cpu },
  { name: 'Componentes', icon: Component },
  { name: 'Baterías', icon: Battery },
  { name: 'Herramientas', icon: Wrench },
  { name: 'Electrónica', icon: CircuitBoard },
  { name: 'Sensores', icon: Zap },
];

export default function Categories() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:text-orange-600"
            >
              {React.createElement(category.icon, { className: 'h-8 w-8 mb-2' })}
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}