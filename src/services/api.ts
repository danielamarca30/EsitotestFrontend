import { mockService } from './mockService';

export const api = {
  getCategories: mockService.getCategories,
  getProducts: mockService.getProducts,
  getFeaturedProducts: mockService.getFeaturedProducts,
  getBanners: mockService.getBanners
};