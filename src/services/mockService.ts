import { Product } from '../types/product';
import { categories } from '../data/categories';
import { featuredProducts } from '../data/products';
import { banners } from '../data/banners';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockService = {
  async getCategories() {
    await delay(50);
    return categories;
  },

  async getProducts(search?: string, category?: string): Promise<Product[]> {
    await delay(50);
    
    let filtered = [...featuredProducts];
    
    if (category) {
      const searchCategory = category.toLowerCase();
      filtered = filtered.filter(product => {
        // Check main category and subcategory
        const productCategory = product.category?.toLowerCase() || '';
        const productSubcategory = product.subcategory?.toLowerCase() || '';
        
        // Match if either category or subcategory matches the search
        return productCategory === searchCategory || 
               productSubcategory === searchCategory;
      });
    }
    
    if (search && search.trim() !== '') {
      const query = search.toLowerCase().trim();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  },

  async getFeaturedProducts() {
    await delay(50);
    return featuredProducts;
  },

  async getBanners() {
    await delay(50);
    return banners;
  }
};