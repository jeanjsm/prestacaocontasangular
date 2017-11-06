import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Portaria} from './portaria';
import {Observable} from 'rxjs';
import {RestService} from '../restservice.service';

@Injectable()
export class PortariaService extends RestService {

  url: string = this.baseUrl;

  constructor(http: Http) {
    super(http);
    this.url = this.url + '/portarias';
  }

  getAll(): Observable<Portaria[]> {
    const tipoug$ = this.http.get(this.url, {headers: this.getHeaders()}).map(this.getMapObjects);
    return tipoug$;
  }

  save(tipoug: Portaria): Observable<Response> {
    return this.http.put(`${this.baseUrl}/portaria/${tipoug.id}`, JSON.stringify(tipoug), {headers: this.getHeaders()});
  }

}
