import { h } from 'preact';
import { lazy, Suspense } from 'preact/compat';
import Navbar from './components/layout/Navbar';
import ShippingBanner from './components/layout/ShippingBanner';
import HeroBanner from './components/banner/HeroBanner';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/layout/Footer';

// Lazy load ProductGrid
const ProductGrid = lazy(() => import('./components/products/ProductGrid'));

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ShippingBanner />
      <HeroBanner />
      
      <div className="flex-grow flex">
        <Sidebar />
        
        <main className="flex-1 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Productos Destacados</h2>
            <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
              <ProductGrid />
            </Suspense>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}