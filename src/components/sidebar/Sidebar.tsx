import { h } from 'preact';
import CategoryItem from './CategoryItem';
import { categories } from '../../data/categories';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 bg-orange-50 border-b border-orange-100">
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