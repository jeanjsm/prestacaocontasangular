/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipounidadegestoraComponent } from './tipounidadegestora.component';

describe('TipounidadegestoraComponent', () => {
  let component: TipounidadegestoraComponent;
  let fixture: ComponentFixture<TipounidadegestoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipounidadegestoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipounidadegestoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
