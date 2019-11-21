import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopeComponent } from './shop/shope.component';


const routes: Routes = [
{path:'shope',component:ShopeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRoutingModule { }
 