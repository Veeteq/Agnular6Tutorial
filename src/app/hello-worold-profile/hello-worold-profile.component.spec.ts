import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWoroldProfileComponent } from './hello-worold-profile.component';

describe('HelloWoroldProfileComponent', () => {
  let component: HelloWoroldProfileComponent;
  let fixture: ComponentFixture<HelloWoroldProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWoroldProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWoroldProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
