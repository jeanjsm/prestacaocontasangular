import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";

@Injectable()
export class RestService {

  public baseUrl: string = 'http://localhost:8080/prestacaocontasservices/api';

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
  let tipougs: any[] = [];
  for(var i=0; i<objects.length; i++) {
    tipougs[i] = objects[i];
  }
  return tipougs;
}