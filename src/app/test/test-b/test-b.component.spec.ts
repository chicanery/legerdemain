/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestBComponent } from './test-b.component';

describe('TestBComponent', () => {
  let component: TestBComponent;
  let fixture: ComponentFixture<TestBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
