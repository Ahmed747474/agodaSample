import { ProductService } from './../../components/poduct/service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  /**
   *
   */
  constructor(private readonly productService: ProductService) {}
  totalCart = this.productService.items$;
}
