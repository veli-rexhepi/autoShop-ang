import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyANewCarComponent } from './buy-anew-car.component';

describe('BuyANewCarComponent', () => {
  let component: BuyANewCarComponent;
  let fixture: ComponentFixture<BuyANewCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyANewCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyANewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
