import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsActiveComponent } from './cars-active.component';

describe('CarsActiveComponent', () => {
  let component: CarsActiveComponent;
  let fixture: ComponentFixture<CarsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
