/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortariaService } from './portaria.service';

describe('PortariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortariaService]
    });
  });

  it('should ...', inject([PortariaService], (service: PortariaService) => {
    expect(service).toBeTruthy();
  }));
});
