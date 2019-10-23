import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAutoComponent } from './display-auto.component';

describe('DisplayAutoComponent', () => {
  let component: DisplayAutoComponent;
  let fixture: ComponentFixture<DisplayAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
