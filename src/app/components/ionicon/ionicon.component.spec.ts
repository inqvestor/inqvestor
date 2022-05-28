/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IoniconComponent } from './ionicon.component';

describe('IoniconComponent', () => {
  let component: IoniconComponent;
  let fixture: ComponentFixture<IoniconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoniconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoniconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
