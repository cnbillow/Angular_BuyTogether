import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
