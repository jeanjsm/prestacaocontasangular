import { Component, OnInit } from '@angular/core';
import {Tipoug} from "../../shared/tipoug/tipoug";
import {TipougService} from "../../shared/tipoug/tipoug.service";

@Component({
  selector: 'app-tipounidadegestora',
  template: '../templateForm.html',
  templateUrl: './tipounidadegestora.component.html',
  styleUrls: ['./tipounidadegestora.component.css'],
  providers: [TipougService]
})
export class TipounidadegestoraComponent implements OnInit {

  isShow: boolean = false;

  tipoug: Tipoug[] = [];
  selectedRow = Number;
  linhaSelecionada: number;
  setClicketRow : Function;
  tipoUgSelecionado: Tipoug = new Tipoug;
  showDialog = false;
  isNovo = true;

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
    this.isNovo = true;
  }

  cancelar() {
    this.showDialog = false;
  }

  editar() {
    this.setClicketRow = function (index) {
      this.selectedRow = index;
      this.linhaSelecionada = index;
      this.tipoUgSelecionado = this.tipoug[index];
      this.isNovo = false;
    }
    this.showDialog = true;
    this.tipoUgSelecionado = this.tipoug[this.linhaSelecionada];
  }

  salvar() {
    alert('Não implementado ainda...')
  }

}
