import { h } from 'preact';
import { ShoppingCart } from 'lucide-preact';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-orange-400">${price.toFixed(2)}</span>
          <button className="bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}