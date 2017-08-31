import {Routes} from "@angular/router";
import {TipounidadegestoraComponent} from "./administrativo/tipounidadegestora/tipounidadegestora.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdministrativoComponent} from "./administrativo/administrativo.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'administrativo',
    component: AdministrativoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tipounidadegestora',
    component: TipounidadegestoraComponent
  }
];
