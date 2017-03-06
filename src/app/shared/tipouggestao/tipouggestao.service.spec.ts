/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipouggestaoService } from './tipouggestao.service';

describe('TipouggestaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipouggestaoService]
    });
  });

  it('should ...', inject([TipouggestaoService], (service: TipouggestaoService) => {
    expect(service).toBeTruthy();
  }));
});
