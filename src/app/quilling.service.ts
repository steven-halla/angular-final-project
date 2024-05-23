import { Injectable } from '@angular/core';
import * as data from './data.json';
import { Product } from './product';
import { ShoppingCartProduct } from './shopping-cart';
import { ShoppingCart } from './top-menu/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class QuillingService {
  categories = [
    'Animal',
    'Baby',
    'Birthday',
    'Congratulation',
    'Graduation',
    'Holidays',
    'Nature',
    'Scenery',
    'Thank you'
  ];

  products: Product[] = (data as any).default;
  filteredProducts: Product[] = [];
  shoppingCart: ShoppingCart = new ShoppingCart();
  total: number = 0;

  constructor() {}

  shuffleArray = (array: Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  addProduct = (product: Product) => {
    //Your code is here
  }

  removeProduct = (product: Product) => {
    //Your code is here
  }

  getNewCount = () => {
    //Your code is here
  }

  removeAllProducts = (id: string) => {
    //Your code is here
  }

  getTotalCost = () => {
    //Your code is here
    //Make sure to replace the 0 with your actual code
    return 0;
  }

  getProductsByCategory(category?: string): Product[] {
    if (category) {
      return this.products.filter(product => product.category === category);
    }
    return this.products;
  }
}
