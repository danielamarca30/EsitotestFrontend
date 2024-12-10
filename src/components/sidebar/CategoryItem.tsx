import { h } from 'preact';
import { useState } from 'preact/hooks';
import { ChevronDown, ChevronRight } from 'lucide-preact';
import { Category } from '../../types/category';
import { productStore } from '../../store/ProductStore';

interface CategoryItemProps {
  category: Category;
  depth?: number;
}

export default function CategoryItem({ category, depth = 0 }: CategoryItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubcategories = category.subcategories?.length > 0;

  const handleCategoryClick = () => {
    if (hasSubcategories) {
      setIsOpen(!isOpen);
    }
    productStore.setSelectedCategory(category.name);
  };

  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-orange-50 transition-colors ${
          depth === 0 ? 'font-medium' : ''
        }`}
        style={{ paddingLeft: `${depth * 1 + 1}rem` }}
        onClick={handleCategoryClick}
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
}