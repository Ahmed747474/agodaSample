import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    let existingCartItems = JSON.parse(
      localStorage.getItem('products') || '{}'
    );
    if (!existingCartItems.length) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: Product) {
    this.items$
      .pipe(
        take(1),
        map((products) => {
          debugger;
          products.push(product);
          localStorage.setItem('products', JSON.stringify(products));
        })
      )
      .subscribe();
  }
}
