import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableNestingComponent } from './variable-nesting.component';

describe('VariableNestingComponent', () => {
  let component: VariableNestingComponent;
  let fixture: ComponentFixture<VariableNestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableNestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
