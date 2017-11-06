import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AdministrativoComponent} from './administrativo/administrativo.component';
import {TipounidadegestoraComponent} from './administrativo/tipounidadegestora/tipounidadegestora.component';
import {ModalComponent} from './shared/components/modal/modal.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SplitPaneModule} from 'ng2-split-pane/lib/ng2-split-pane';
import {NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {routes} from './app.routes';
import { PortariaComponent } from './administrativo/portaria/portaria.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {AdministrativoDashboardComponent} from './administrativo/administrativo-dashboard/administrativo-dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    AdministrativoComponent,
    AdministrativoDashboardComponent,
    TipounidadegestoraComponent,
    ModalComponent,
    DashboardComponent,
    PortariaComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    SplitPaneModule,
    NgbModule,
    NgbAccordionModule,
    RouterModule.forRoot(routes),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
