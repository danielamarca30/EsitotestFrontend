import { h } from 'preact';
import { ShoppingCart, Search, Menu, User } from 'lucide-preact';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 mr-4 cursor-pointer" />
            <h1 className="text-2xl font-bold text-orange-400">ESITO</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-400"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center cursor-pointer hover:text-orange-400">
              <User className="h-6 w-6" />
              <span className="ml-2">Mi Cuenta</span>
            </div>
            <div className="flex items-center cursor-pointer hover:text-orange-400">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
              <span className="ml-2">Carrito</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}