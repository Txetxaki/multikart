import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './product/collection/collection/collection.component';
import { ProductNoSidebarComponent } from './product/product-details/product-no-sidebar/product-no-sidebar.component';
import { SearchComponent } from './product/search/search.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';

// Routes
const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  {
    path: 'collection/:category',
    component: CollectionComponent
  },
  {
    path: 'product/:id',
    component: ProductNoSidebarComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'compare',
    component: ProductCompareComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'checkout/success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
