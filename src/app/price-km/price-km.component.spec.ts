import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceKmComponent } from './price-km.component';

describe('PriceKmComponent', () => {
  let component: PriceKmComponent;
  let fixture: ComponentFixture<PriceKmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceKmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceKmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
