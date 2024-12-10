import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import ProductCard from './ProductCard';
import { productState, productStore } from '../../store/ProductStore';

export default function ProductGrid() {
  // Subscribe to the signal value directly
  const { products, loading, error } = productState.value;

  useEffect(() => {
    productStore.fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid place-items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-400 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {error}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No se encontraron productos
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}