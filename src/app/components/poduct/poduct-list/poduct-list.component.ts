import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-poduct-list',
  templateUrl: './poduct-list.component.html',
  styleUrls: ['./poduct-list.component.css'],
})
export class PoductListComponent {
  prouctList: Product[] = [
    {
      id: 1,
      productName: 'new product',
      price: 10,
      summary: 'summary',
    },
    {
      id: 2,
      productName: 'new product 2',
      price: 10,
      summary: 'summary 2',
    },
    {
      id: 3,
      productName: 'new product 3',
      price: 10,
      summary: 'summary 3',
    },
  ];
}
