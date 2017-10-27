import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AdministrativoDashboardComponent} from './administrativo-dashboard/administrativo-dashboard.component';
import {TranslateModule} from '@ngx-translate/core';
import { HeaderComponent, SidebarComponent } from '../shared';
import {AdministrativoRoutingModule} from './administrativo-routing.module';
import {TipounidadegestoraComponent} from './tipounidadegestora/tipounidadegestora.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    AdministrativoRoutingModule,
    TranslateModule
  ],
  declarations: [
    AdministrativoDashboardComponent,
    TipounidadegestoraComponent,
    HeaderComponent,
    SidebarComponent]
})

export class AdministrativoModule {

}
