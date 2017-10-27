import {RouterModule, Routes} from '@angular/router';
import {TipounidadegestoraComponent} from './tipounidadegestora.component';
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: TipounidadegestoraComponent}
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TipounidadegestoraRoutingModule { }
