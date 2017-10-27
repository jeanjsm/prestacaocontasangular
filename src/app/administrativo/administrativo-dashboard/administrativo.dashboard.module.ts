import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAlertModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {StatModule} from '../../shared/modules/stat/stat.module';
import {DashboardRoutingModule} from './administrativo.dashboard-routing.module';
import {AdministrativoDashboardComponent} from './administrativo-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DashboardRoutingModule,
    StatModule
  ],
  declarations: [
    AdministrativoDashboardComponent
  ]
})

export class  DashboardModule { }
