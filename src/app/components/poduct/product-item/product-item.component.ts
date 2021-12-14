import { ProductService } from './../service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private cartService: ProductService) {}

  ngOnInit() {}
  addToCart(item: Product) {
    this.cartService.addToCart(item);
  }
}
