import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {Tipoug} from "./tipoug";
import {Observable} from "rxjs";
import {RestService} from "../restservice.service";

@Injectable()
export class TipougService extends RestService{

  constructor(http : Http) {
    super(http);
  }

  getAll(): Observable<Tipoug[]>{
    let tipoug$ = this.http.get(`${this.baseUrl}/tipougs/all`, {headers: this.getHeaders()}).map(this.getMapObjects);
    return tipoug$;
  }

}
