import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAUsedCarComponent } from './buy-a-used-car.component';

describe('BuyAUsedCarComponent', () => {
  let component: BuyAUsedCarComponent;
  let fixture: ComponentFixture<BuyAUsedCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAUsedCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAUsedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
