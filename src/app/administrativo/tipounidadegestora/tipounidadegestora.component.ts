import { Component, OnInit } from '@angular/core';
import {Tipoug} from "../../shared/tipoug/tipoug";
import {TipougService} from "../../shared/tipoug/tipoug.service";

@Component({
  selector: 'app-tipounidadegestora',
  templateUrl: './tipounidadegestora.component.html',
  styleUrls: ['./tipounidadegestora.component.css'],
  providers: [TipougService]
})
export class TipounidadegestoraComponent implements OnInit {

  mostrar: boolean = false;
  mostrarForm: boolean = false;

  tipoug: Tipoug[] = [];
  selectedRow = Number;
  setClicketRow : Function;
  tipoUgSelecionado: Tipoug = new Tipoug;

  constructor(private tipougservice : TipougService) {
    this.setClicketRow = function (index) {
      this.selectedRow = index;
      this.tipoUgSelecionado = this.tipoug[index];
    }
  }

  ngOnInit() {
    this.tipougservice.getAll()
      .subscribe(p => this.tipoug = p);
    this.mostrarForm = false;
  }

  public getMostrarForm() {
    return this.mostrarForm;
  }

  public btnMostrarForm() {
    this.mostrarForm = true;
  }

  public btnEsconderForm() {
    this.mostrarForm = false;
  }

}
