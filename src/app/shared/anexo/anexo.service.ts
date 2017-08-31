import { Injectable } from '@angular/core';
import {RestService} from "../restservice.service";
import {Http} from "@angular/http";

@Injectable()
export class AnexoService extends RestService{

  constructor(http : Http) {
    super(http);
  }

}
