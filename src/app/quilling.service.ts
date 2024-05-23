import { Injectable } from '@angular/core';
import * as data from './data.json';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCart } from './top-menu/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class QuillingService {
  categories = [
    'Animal', 'Baby', 'Birthday', 'Congratulation', 'Graduation',
    'Holidays', 'Nature', 'Scenery', 'Thank you'
  ];

  products: Product[] = (data as any).default;
  private filteredProductsSubject = new BehaviorSubject<Product[]>([]);
  filteredProducts$ = this.filteredProductsSubject.asObservable();
  shoppingCart: ShoppingCart = new ShoppingCart();
  total: number = 0;

  constructor() {
    // Initialize with all products
    this.filteredProductsSubject.next(this.products);
  }

  shuffleArray = (array: Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  addProduct = (product: Product) => {
    // Your code is here
  }

  removeProduct = (product: Product) => {
    // Your code is here
  }

  getNewCount = () => {
    // Your code is here
  }

  removeAllProducts = (id: string) => {
    // Your code is here
  }

  getTotalCost = () => {
    // Your code is here
    return 0;
  }

  getProductsByCategory(category?: string): Product[] {
    if (category) {
      return this.products.filter(product => product.category === category);
    }
    return this.products;
  }

  setFilteredProducts(searchVal: string): void {
    const filtered = this.products.filter((product: Product) =>
        product.name.toLowerCase().includes(searchVal.toLowerCase()));
    this.filteredProductsSubject.next(filtered);
  }

  resetFilteredProducts(): void {
    this.filteredProductsSubject.next(this.products);
  }

  setFilteredProductsByCategory(category: string): void {
    const filtered = this.getProductsByCategory(category);
    this.filteredProductsSubject.next(filtered);
  }
}
