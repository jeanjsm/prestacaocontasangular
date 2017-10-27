import {Routes} from '@angular/router';
import {TipounidadegestoraComponent} from './administrativo/tipounidadegestora/tipounidadegestora.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdministrativoComponent} from './administrativo/administrativo.component';
import {PortariaComponent} from './administrativo/portaria/portaria.component';
import {AdministrativoDashboardComponent} from './administrativo/administrativo-dashboard/administrativo-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'administrativo',
    component: AdministrativoComponent,
    children: [
      {
        path: 'tipounidadegestora',
        component: TipounidadegestoraComponent
      },
      {
        path: 'portaria',
        component: PortariaComponent
      },
      {
        path: 'administrativo-dashboard',
        component: AdministrativoDashboardComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
