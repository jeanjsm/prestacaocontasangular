import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AdministrativoComponent} from "./administrativo/administrativo.component";
import {TipounidadegestoraComponent} from "./administrativo/tipounidadegestora/tipounidadegestora.component";
import {ModalComponent} from "./shared/components/modal/modal.component";
import {Ng2PaginationModule} from "ng2-pagination";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SplitPaneModule} from "ng2-split-pane/lib/ng2-split-pane";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    AdministrativoComponent,
    TipounidadegestoraComponent,
    ModalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    SplitPaneModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
