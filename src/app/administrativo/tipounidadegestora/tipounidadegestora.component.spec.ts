/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TipounidadegestoraComponent} from './tipounidadegestora.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TipounidadegestoraModule} from './tipounidadegestora.module';

describe('TipounidadegestoraComponent', () => {
  let component: TipounidadegestoraComponent;
  let fixture: ComponentFixture<TipounidadegestoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TipounidadegestoraModule
      ],
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
