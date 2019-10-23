import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAutoListComponent } from './display-auto-list.component';

describe('DisplayAutoListComponent', () => {
  let component: DisplayAutoListComponent;
  let fixture: ComponentFixture<DisplayAutoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAutoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
