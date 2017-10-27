import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class RestService {

  public baseUrl = 'http://localhost:8280/prestacaocontasservices/api';

  constructor(public http: Http) { }

  public getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  public getMapObjects(response: Response) {
    return mapObjects(response);
  }

}

function mapObjects(response: Response): any[] {
  const objects = response.json();
  const any: any[] = [];
  for (let i = 0; i < objects.length; i++) {
    any[i] = objects[i];
  }
  return any;
}
