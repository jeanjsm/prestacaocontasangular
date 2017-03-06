/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnexoService } from './anexo.service';

describe('AnexoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnexoService]
    });
  });

  it('should ...', inject([AnexoService], (service: AnexoService) => {
    expect(service).toBeTruthy();
  }));
});
