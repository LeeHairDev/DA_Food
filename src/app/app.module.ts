import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { AddProductComponent } from './pages/admin/product/add-product/add-product.component';
import { ProductsComponent } from './pages/admin/product/products/products.component';
import { UpdateProductComponent } from './pages/admin/product/update-product/update-product.component';
import { CategoriesComponent } from './pages/admin/category/categories/categories.component';
import { CommentsComponent } from './pages/admin/comments/comments.component';
import { AddCategoryComponent } from './pages/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/category/update-category/update-category.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

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
    DangnhapComponent,
    AdminComponent,
    DashboardComponent,
    CategoriesComponent,
    ProductsComponent,
    CommentsComponent,
    UsersComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MessageModule,
    MessagesModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
