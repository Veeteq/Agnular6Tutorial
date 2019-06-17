import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWoroldContactComponent } from './hello-worold-contact.component';

describe('HelloWoroldContactComponent', () => {
  let component: HelloWoroldContactComponent;
  let fixture: ComponentFixture<HelloWoroldContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWoroldContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWoroldContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
