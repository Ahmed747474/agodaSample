import { MaterialUIModule } from './../../../frameWork/materialUI/materialUI.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoductComponent } from './poduct.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PoductListComponent } from './poduct-list/poduct-list.component';
import { RouterModule } from '@angular/router';
import { route } from './product.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(route), MaterialUIModule],
  declarations: [PoductComponent, ProductItemComponent, PoductListComponent],
  exports: [PoductComponent, ProductItemComponent, PoductListComponent],
})
export class PoductModule {}
