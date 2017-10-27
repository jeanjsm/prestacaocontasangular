import {Component, OnInit} from "@angular/core";
import * as webdriver from "selenium-webdriver";
import {TipounidadegestoraComponent} from "./tipounidadegestora/tipounidadegestora.component";
import Alert = webdriver.Alert;
import {Router} from "@angular/router";

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent implements OnInit {

  tipoUnidadeGestora: TipounidadegestoraComponent;

  constructor(public router: Router) {
  }

  ngOnInit() {
    if (this.router.url === '/administrativo') {
      this.router.navigate(['/administrativo-dashboard']);
    }
  }

  public showTipoUnidadeGestora() {
    this.tipoUnidadeGestora.isShow = true;
  }

}
