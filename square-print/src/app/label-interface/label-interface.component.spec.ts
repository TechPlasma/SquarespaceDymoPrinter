import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInterfaceComponent } from './label-interface.component';

describe('LabelInterfaceComponent', () => {
  let component: LabelInterfaceComponent;
  let fixture: ComponentFixture<LabelInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
