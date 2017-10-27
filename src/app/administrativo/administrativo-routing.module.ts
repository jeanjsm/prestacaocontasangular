import {RouterModule, Routes} from '@angular/router';
import {AdministrativoComponent} from './administrativo.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AdministrativoComponent,
    children: [
      {path: 'administrativo-dashboard', loadChildren: './administrativo-dashboard/administrativo-dashboard.module#DashboardModule'},
      {path: 'tipounidadegestora', loadChildren: './tipounidadegestora/tipounidadegestora.module#TipounidadegestoraModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministrativoRoutingModule {
}
