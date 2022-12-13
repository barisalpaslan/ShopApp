import { CheckoutComponent } from './shop/checkout/checkout.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { ShopModule } from './shop/shop.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    RouterModule.forRoot([
      {
        path: "shop", component:ShopComponent
      },
      {
        path: "cart", component:CartDetailComponent
      },
      {
        path: "checkout", component:CheckoutComponent
      },
      {
        path : "admin" , loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: "**", redirectTo : "/shop"
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
