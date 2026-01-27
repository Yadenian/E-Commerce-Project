import type { Product, ProductsResponse } from '../types';

const API_BASE_URL = 'https://dummyjson.com';

export const api = {
 
  getProducts: async (skip: number = 0, limit: number = 30): Promise<ProductsResponse> => {
    const response = await fetch(`${API_BASE_URL}/products?skip=${skip}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  
  getProduct: async (id: number): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },

 
  searchProducts: async (query: string): Promise<ProductsResponse> => {
    const response = await fetch(`${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to search products');
    }
    return response.json();
  },

  
  getProductsByCategory: async (category: string): Promise<ProductsResponse> => {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products by category');
    }
    return response.json();
  },

  
  getCategories: async (): Promise<string[]> => {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },
};
