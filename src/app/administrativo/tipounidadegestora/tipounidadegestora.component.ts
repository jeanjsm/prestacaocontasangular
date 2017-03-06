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

  tipoug: Tipoug[] = [];
  selectedRow = Number;
  linhaSelecionada: number;
  setClicketRow : Function;
  tipoUgSelecionado: Tipoug = new Tipoug;
  showDialog = false;

  constructor(private tipougservice : TipougService) {
    this.setClicketRow = function (index) {
      this.selectedRow = index;
      this.linhaSelecionada = index;
      this.tipoUgSelecionado = this.tipoug[index];
    }
  }

  ngOnInit() {
    this.tipougservice.getAll()
      .subscribe(p => this.tipoug = p);
    this.showDialog = false;
  }

  novo() {
    this.tipoUgSelecionado = new Tipoug;
    this.showDialog = true;
  }

  cancelar() {
    this.showDialog = false;
  }

  editar() {
    this.setClicketRow = function (index) {
      this.selectedRow = index;
      this.linhaSelecionada = index;
      this.tipoUgSelecionado = this.tipoug[index];
    }
    this.showDialog = true;
    this.tipoUgSelecionado = this.tipoug[this.linhaSelecionada];
  }

  salvar() {
    alert('Não implementado ainda...')
  }

}
