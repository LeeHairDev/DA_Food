import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ProductsComponent } from './pages/admin/product/products/products.component';
import { CategoriesComponent } from './pages/admin/category/categories/categories.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { CommentsComponent } from './pages/admin/comments/comments.component';
import { AddProductComponent } from './pages/admin/product/add-product/add-product.component';
import { UpdateProductComponent } from './pages/admin/product/update-product/update-product.component';
import { AddCategoryComponent } from './pages/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/category/update-category/update-category.component';

const routes : Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
},
{
    path : '',
    component: ClientComponent,
    children: [{
      path: 'home', component: HomeComponent,
     
    },
    {
      path : 'about',
      component: AboutComponent
  },
  {
    path : 'shop',
    component: ShopComponent,
    children: [
      {path: '', component: ListProductsComponent},
     
    ]
  },
  {
    path: 'products/:id', component: DetailProductComponent
   }
  ,
  {
    path : 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: ListBlogComponent,
      },{
      path: ':id',
      component: DetailBlogComponent,
    },]
  },
  
  {
    path : 'contact',
    component: ContactComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path:'dangnhap',
    component: DangnhapComponent
  },
  {
    path: 'dangky',
    component: RegisterComponent
  }
  // ,{path: 'shop/:id',pathMatch: 'prefix', component: DetailProductComponent},

    
  ]
    
},{
  path: 'admin',
  component: AdminComponent,
  children:[
    {path:'', component: DashboardComponent},
    {path: 'products',component: ProductsComponent},
    {path: 'products/add',component: AddProductComponent},
    {path: 'products/:id/update',component: UpdateProductComponent},
    {path: 'categories',component: CategoriesComponent},
    {path: 'categories/add',component: AddCategoryComponent},
    {path: 'categories/:id/update',component: UpdateCategoryComponent},
    {path: 'user',component: UsersComponent},
    {path: 'cmt',component:CommentsComponent},
    {path: 'cart',component: CartComponent},
    {
      path : '',
      redirectTo : '/admin',
      pathMatch : 'full'
  },
]
},
{path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
