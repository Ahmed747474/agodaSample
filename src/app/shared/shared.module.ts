import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialUIModule } from './../../frameWork/materialUI/materialUI.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialUIModule,
    BrowserAnimationsModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserModule,
    MaterialUIModule,
    BrowserAnimationsModule,
  ],
})
export class SharedModule {}
