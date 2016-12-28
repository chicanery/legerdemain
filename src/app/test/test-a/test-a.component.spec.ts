/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestAComponent } from './test-a.component';

describe('TestAComponent', () => {
  let component: TestAComponent;
  let fixture: ComponentFixture<TestAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
