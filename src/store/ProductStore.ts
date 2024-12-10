import { Product } from '../types/product';
import { signal } from '@preact/signals';
import { mockService } from '../services/mockService';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedCategory: string | null;
  searchQuery: string;
  cache: {
    [key: string]: {
      data: Product[];
      timestamp: number;
    };
  };
}

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

const initialState: ProductState = {
  products: [],
  loading: true,
  error: null,
  selectedCategory: null,
  searchQuery: '',
  cache: {}
};

export const productState = signal<ProductState>(initialState);

export const productStore = {
  async fetchProducts() {
    try {
      const cacheKey = `${productState.value.searchQuery}-${productState.value.selectedCategory}`;
      const cachedData = productState.value.cache[cacheKey];
      
      // Verificar si hay datos en caché y si son válidos
      if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
        productState.value = {
          ...productState.value,
          products: cachedData.data,
          loading: false
        };
        return;
      }

      productState.value = {
        ...productState.value,
        loading: true,
        error: null
      };

      const products = await mockService.getProducts(
        productState.value.searchQuery,
        productState.value.selectedCategory
      );
      
      // Actualizar caché
      const newCache = {
        ...productState.value.cache,
        [cacheKey]: {
          data: products,
          timestamp: Date.now()
        }
      };

      productState.value = {
        ...productState.value,
        products,
        loading: false,
        cache: newCache
      };
    } catch (error) {
      productState.value = {
        ...productState.value,
        error: 'Error al cargar los productos',
        loading: false,
        products: []
      };
    }
  },

  setSelectedCategory(category: string | null) {
    productState.value = {
      ...productState.value,
      selectedCategory: category
    };
    this.fetchProducts();
  },

  setSearchQuery(query: string) {
    productState.value = {
      ...productState.value,
      searchQuery: query
    };
    this.fetchProducts();
  },

  clearFilters() {
    productState.value = {
      ...productState.value,
      selectedCategory: null,
      searchQuery: ''
    };
    this.fetchProducts();
  },

  clearCache() {
    productState.value = {
      ...productState.value,
      cache: {}
    };
  }
};

// Initial fetch
productStore.fetchProducts();