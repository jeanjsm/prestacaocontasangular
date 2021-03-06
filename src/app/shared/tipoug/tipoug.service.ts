import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Tipoug} from './tipoug';
import {Observable} from 'rxjs';
import {RestService} from '../restservice.service';

@Injectable()
export class TipougService extends RestService {

  constructor(http: Http) {
    super(http);
  }

  getAll(): Observable<Tipoug[]> {
    const tipoug$ = this.http.get(`${this.baseUrl}/tipougs`, {headers: this.getHeaders()}).map(this.getMapObjects);
    return tipoug$;
  }

  save(tipoug: Tipoug): Observable<Response> {
    return this.http.put(`${this.baseUrl}/tipoug/${tipoug.id}`, JSON.stringify(tipoug), {headers: this.getHeaders()});
  }

}
