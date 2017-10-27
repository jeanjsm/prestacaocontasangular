/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdministrativoComponent } from './administrativo.component';
import {RouterTestingModule} from "@angular/router/testing";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateModule} from "@ngx-translate/core";
import {HeaderComponent} from "../shared/components/header/header.component";
import {SidebarComponent} from "../shared/components/sidebar/sidebar.component";

describe('AdministrativoComponent', () => {
  let component: AdministrativoComponent;
  let fixture: ComponentFixture<AdministrativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbDropdownModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [
        AdministrativoComponent,
        HeaderComponent,
        SidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
