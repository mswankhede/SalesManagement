import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {CustRegisterComponent} from './cust-register/cust-register.component';
import { from } from 'rxjs';
import { AdminRegisterComponent } from './admin-register/admin-register.component';


const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'cust-register',component:CustRegisterComponent},
{path:'admin-register',component:AdminRegisterComponent},
{path:'user',component:UserComponent}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
