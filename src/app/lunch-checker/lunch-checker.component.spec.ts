import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchCheckerComponent } from './lunch-checker.component';

describe('LunchCheckerComponent', () => {
  let component: LunchCheckerComponent;
  let fixture: ComponentFixture<LunchCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
