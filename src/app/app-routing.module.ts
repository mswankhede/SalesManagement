import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {CustRegisterComponent} from './cust-register/cust-register.component';
import { from } from 'rxjs';


const routes: Routes = [
{path:'user',component:UserComponent},
{path:'login',component:LoginComponent},
{path:'cust-register',component:CustRegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
