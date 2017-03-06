import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AdministrativoComponent} from "./administrativo/administrativo.component";
import {TipounidadegestoraComponent} from "./administrativo/tipounidadegestora/tipounidadegestora.component";
import {MenuComponent} from "./menu/menu.component";
import {ModalComponent} from "./shared/components/modal/modal.component";
import {Ng2PaginationModule} from 'ng2-pagination';
import { ClienteComponent } from './administrativo/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrativoComponent,
    TipounidadegestoraComponent,
    MenuComponent,
    ModalComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
