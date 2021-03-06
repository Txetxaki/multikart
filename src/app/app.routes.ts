import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

export const rootRouterConfig: Routes = [

  {
    path : '',
    component : MainComponent,
    children: [ 
      {
        path : 'home',
        loadChildren: './shop/shop.module#ShopModule'
      },
      { 
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      },
      { 
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
      }
    ]
  },
  {
    path: '**', 
    redirectTo: 'home/one'
  }
];

