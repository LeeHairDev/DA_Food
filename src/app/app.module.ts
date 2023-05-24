import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailBlogComponent } from './pages/detail-blog/detail-blog.component';
import { PayComponent } from './pages/pay/pay.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListBlogComponent } from './pages/list-blog/list-blog.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ClientComponent } from './layout/client/client.component';
import { DangnhapComponent } from './pages/dangnhap/dangnhap.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ShopComponent,
    BlogComponent,
    ContactComponent,
    CartComponent,
    DetailProductComponent,
    RegisterComponent,
    DetailBlogComponent,
    PayComponent,
    NotFoundComponent,
    ListBlogComponent,
    ListProductsComponent,
    ClientComponent,
    DangnhapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
