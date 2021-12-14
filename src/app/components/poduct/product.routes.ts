import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { PoductComponent } from './poduct.component';
import { Routes } from '@angular/router';

export const route: Routes = [
  {
    path: 'product-list',
    component: PoductComponent,
  },
  {
    component: ProductSummaryComponent,
    path: 'product-list:id',
  },
];
