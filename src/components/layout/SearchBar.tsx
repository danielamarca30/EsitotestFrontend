import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Search, X } from 'lucide-preact';
import { productStore } from '../../store/ProductStore';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      productStore.setSearchQuery(search);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleClear = () => {
    setSearch('');
    productStore.clearFilters();
  };

  return (
    <div className="flex-1 max-w-2xl mx-4 sm:mx-8">
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Buscar productos..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-400 transition-colors"
        />
        {search ? (
          <button
            onClick={handleClear}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        ) : (
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        )}
      </div>
    </div>
  );
}