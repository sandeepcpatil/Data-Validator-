import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsDetailsComponent } from './validators-details.component';

describe('ValidatorsDetailsComponent', () => {
  let component: ValidatorsDetailsComponent;
  let fixture: ComponentFixture<ValidatorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
