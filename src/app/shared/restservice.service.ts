import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";

@Injectable()
export class RestService {

  public baseUrl: string = 'http://localhost:8280/prestacaocontasservices/api';

  constructor(public http : Http) { }

  public getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  public getMapObjects(response: Response) {
    return mapObjects(response);
  }

}

function mapObjects(response:Response): any[]{
  let objects = response.json();
  let any: any[] = [];
  for(var i=0; i<objects.length; i++) {
    any[i] = objects[i];
  }
  return any;
}
