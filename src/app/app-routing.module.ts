import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartCounterComponent } from './components/cart-counter/cart-counter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'cart', component: CartCounterComponent},
  { path:'single/:id', component: SingleProductComponent},
  { path:'wish', component: WishListComponent},
  { path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
