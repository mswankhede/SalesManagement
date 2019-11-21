import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
