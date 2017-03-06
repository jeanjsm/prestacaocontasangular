/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipougService } from './tipoug.service';

describe('TipougService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipougService]
    });
  });

  it('should ...', inject([TipougService], (service: TipougService) => {
    expect(service).toBeTruthy();
  }));
});
