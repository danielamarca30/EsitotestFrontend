import { h } from 'preact';
import { ShoppingCart, Search, Menu, User } from 'lucide-preact';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 mr-4 cursor-pointer hover:text-orange-400" />
            <h1 className="text-2xl font-bold text-orange-400">ESITO</h1>
          </div>
          
          <SearchBar />

          <div className="flex items-center space-x-6">
            <div className="flex items-center cursor-pointer hover:text-orange-400 transition-colors">
              <User className="h-6 w-6" />
              <span className="ml-2 hidden sm:inline">Mi Cuenta</span>
            </div>
            <div className="flex items-center cursor-pointer hover:text-orange-400 transition-colors">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
              <span className="ml-2 hidden sm:inline">Carrito</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}