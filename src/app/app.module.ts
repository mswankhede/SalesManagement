import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { CustRegisterComponent } from './cust-register/cust-register.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminRegisterComponent,
    CustRegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
