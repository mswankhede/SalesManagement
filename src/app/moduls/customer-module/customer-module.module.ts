import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerModuleRoutingModule } from './customer-module-routing.module';
import { ShopeComponent } from './shope/shope.component';


@NgModule({
  declarations: [ShopeComponent],
  imports: [
    CommonModule,
    CustomerModuleRoutingModule
  ]
})
export class CustomerModuleModule { }
