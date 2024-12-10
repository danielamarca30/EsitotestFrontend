import { h } from 'preact';
import { ShoppingCart } from 'lucide-preact';
import { Product } from '../../types/product';
import OptimizedImage from '../OptimizedImage';

export default function ProductCard({ name, price, image }: Product) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative pb-[75%] overflow-hidden">
        <OptimizedImage
          src={image}
          alt={name}
          width={400}
          height={300}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-orange-400">{price.toFixed(2)}€</span>
          <button 
            className="bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition-colors"
            aria-label={`Añadir ${name} al carrito`}
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}