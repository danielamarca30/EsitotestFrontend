import { h } from 'preact';
import { useState } from 'preact/hooks';
import { ChevronDown, ChevronRight } from 'lucide-preact';

interface Category {
  name: string;
  subcategories?: Category[];
}

const categories: Category[] = [
  {
    name: 'Microcontroladores',
    subcategories: [
      {
        name: 'Arduino',
        subcategories: [
          { name: 'Arduino UNO' },
          { name: 'Arduino Mega' },
          { name: 'Arduino Nano' }
        ]
      },
      {
        name: 'Raspberry Pi',
        subcategories: [
          { name: 'Raspberry Pi 4' },
          { name: 'Raspberry Pi Zero' }
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
          { name: 'Película metálica' }
        ]
      },
      {
        name: 'Capacitores',
        subcategories: [
          { name: 'Electrolíticos' },
          { name: 'Cerámicos' }
        ]
      }
    ]
  },
  {
    name: 'Sensores',
    subcategories: [
      { name: 'Temperatura' },
      { name: 'Humedad' },
      { name: 'Movimiento' }
    ]
  }
];

const CategoryItem = ({ category, depth = 0 }: { category: Category; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-orange-50 ${
          depth === 0 ? 'font-medium' : ''
        }`}
        style={{ paddingLeft: `${depth * 1 + 1}rem` }}
        onClick={() => hasSubcategories && setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{category.name}</span>
        {hasSubcategories && (
          <span className="text-gray-400">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </div>
      {isOpen && hasSubcategories && (
        <div className="ml-2">
          {category.subcategories.map((subcat, index) => (
            <CategoryItem key={index} category={subcat} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 bg-orange-100 border-b">
        <h2 className="font-bold text-gray-800">Categorías</h2>
      </div>
      <div className="py-2">
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>
    </div>
  );
}