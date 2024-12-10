import { http, HttpResponse } from 'msw';
import { categories } from '../data/categories';
import { featuredProducts } from '../data/products';
import { banners } from '../data/banners';

export const handlers = [
  http.get('/api/categories', () => {
    return HttpResponse.json(categories);
  }),

  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('search')?.toLowerCase() || '';
    const category = url.searchParams.get('category')?.toLowerCase() || '';
    
    let filtered = [...featuredProducts];
    
    if (category) {
      const findInCategory = (product: any, cat: string): boolean => {
        return product.category?.toLowerCase() === cat.toLowerCase() ||
          product.subcategory?.toLowerCase() === cat.toLowerCase();
      };

      filtered = filtered.filter(product => findInCategory(product, category));
    }
    
    if (search) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description?.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    return HttpResponse.json(filtered);
  }),

  http.get('/api/featured-products', () => {
    return HttpResponse.json(featuredProducts);
  }),

  http.get('/api/banners', () => {
    return HttpResponse.json(banners);
  })
];