import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthbillComponent } from './monthbill.component';

describe('MonthbillComponent', () => {
  let component: MonthbillComponent;
  let fixture: ComponentFixture<MonthbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
