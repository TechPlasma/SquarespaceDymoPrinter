import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UI2Component } from './ui2.component';

describe('UI2Component', () => {
  let component: UI2Component;
  let fixture: ComponentFixture<UI2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UI2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UI2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
