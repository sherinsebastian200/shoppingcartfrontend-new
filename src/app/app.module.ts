import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchLoginComponent } from './search-login/search-login.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProfileComponent } from './view-profile/view-profile.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:AddProductsComponent
  },
  {
    path:"view",
    component:ViewProductsComponent
  },
  {
    path:"search",
    component:SearchProductsComponent
  },
  {
    path:"userregistration",
    component:UserRegistrationComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"searchlog",
    component:SearchLoginComponent
  },
  {
    path:"viewprofile",
    component:ViewProfileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AddProductsComponent,
    ViewProductsComponent,
    SearchProductsComponent,
    NavBarComponent,
    SearchLoginComponent,
    NavUserComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
