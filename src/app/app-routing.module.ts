import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './demo/pages/authentication/auth-guard';
import { CommonModule } from '@angular/common';
import { RoleGuard } from './demo/pages/authentication/roleguard';
import { ReactiveFormsModule } from '@angular/forms';
import { MarketComponent } from './demo/market/market.component';
import { SalesComponent } from './demo/sales/sales.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/guest/login',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/default/default.component').then((c) => c.DefaultComponent)
      },
      {path:'marketdemand',
      component:MarketComponent
      },
      {path:'sales',
        component:SalesComponent
      },
      {
        path: 'marketting',
        loadComponent: () => import('./demo/powerbi/marketting/marketting.component').then((c) => c.MarkettingComponent),
        canActivate:[RoleGuard],
        data: {expectedRole: 'Marketing'}
      },
      {
        path: 'controle-commercial',
        loadComponent: () => import('./demo/powerbi/commercial/commercial.component').then((c) => c.CommercialComponent),
        canActivate:[RoleGuard],

        data: {expectedRole: 'Commercial'}

      },
      {
        path: 'logistics',
        loadComponent: () => import('./demo/powerbi/logistics/logistics.component').then((c) => c.LogisticsComponent),
        canActivate:[RoleGuard],

        data: {expectedRole: 'Logistic'}
      },
      {
        path: 'quality',
        loadComponent: () => import('./demo/powerbi/quality/quality.component').then((c) => c.QualityComponent),
        canActivate:[RoleGuard],

        data: {expectedRole: 'Quality'}
      },
      
      
      
      {path:'profile',
        loadComponent: () => import('./demo/profile/profile.component').then((c) => c.ProfileComponent)
      },
      {path:'notfound',
        loadComponent: () => import('./demo/powerbi/notfound/notfound.component').then((c) => c.NotfoundComponent)
      },
      {path:'marketdemand',
        loadComponent: () => import('./demo/market/market.component').then((c) => c.MarketComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
