import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';

// Services
import { WINDOW_PROVIDERS } from "./services/windows.service";
import { LandingFixService } from '../shared/services/landing-fix.service';
import { InstagramService } from "./services/instagram.service";
import { ProductsService } from "./services/products.service";
import { WishlistService } from "./services/wishlist.service";
import { CartService } from "./services/cart.service";
import { OrderService } from "./services/order.service";
import { PaginationService } from "./classes/paginate";

// Pipes
import { OrderByPipe } from './pipes/order-by.pipe';

// components
import { HeaderComponent } from './header/header/header.component';
import { LeftSidebarComponent } from './header/left-sidebar/left-sidebar.component';
import { TopbarComponent } from './header/widgets/topbar/topbar/topbar.component';
import { NavbarComponent } from './header/widgets/navbar/navbar.component';
import { SettingsComponent } from './header/widgets/settings/settings.component';
import { LeftMenuComponent } from './header/widgets/left-menu/left-menu.component';
import { FooterComponent } from './footer/footer/footer.component';
import { InformationComponent } from './footer/widgets/information/information.component';
import { CategoriesComponent } from './footer/widgets/categories/categories.component';
import { WhyWeChooseComponent } from './footer/widgets/why-we-choose/why-we-choose.component';
import { CopyrightComponent } from './footer/widgets/copyright/copyright.component';
import { SocialComponent } from './footer/widgets/social/social.component';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    LeftSidebarComponent,
    FooterComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    HeaderComponent,
    LeftSidebarComponent,
    FooterComponent,
    OrderByPipe,
    NavbarComponent,
    SettingsComponent,
    LeftMenuComponent,
    TopbarComponent,
    InformationComponent,
    CategoriesComponent,
    WhyWeChooseComponent,
    CopyrightComponent,
    SocialComponent
  ],
  providers: [
    WINDOW_PROVIDERS,
    LandingFixService,
    InstagramService,
    ProductsService,
    WishlistService,
    CartService,
    OrderService,
    PaginationService
  ]
})
export class SharedModule { }
