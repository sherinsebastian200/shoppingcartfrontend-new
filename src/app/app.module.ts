import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AddProductsComponent,
    ViewProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
