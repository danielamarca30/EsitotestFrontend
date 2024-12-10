import { h } from 'preact';
import Navbar from './components/layout/Navbar';
import ShippingBanner from './components/layout/ShippingBanner';
import HeroBanner from './components/banner/HeroBanner';
import Sidebar from './components/sidebar/Sidebar';
import ProductGrid from './components/products/ProductGrid';
import Footer from './components/layout/Footer';

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
            <ProductGrid />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}