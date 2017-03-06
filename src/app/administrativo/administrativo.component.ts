import {Component, OnInit} from "@angular/core";
import * as webdriver from "selenium-webdriver";
import {TipounidadegestoraComponent} from "./tipounidadegestora/tipounidadegestora.component";
import Alert = webdriver.Alert;

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent implements OnInit {

  tipoUnidadeGestora: TipounidadegestoraComponent;

  constructor() {  }

  ngOnInit() {

  }
}
