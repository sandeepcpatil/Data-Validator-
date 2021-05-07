import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewComparatorComponent } from './add-new-comparator.component';

describe('AddNewComparatorComponent', () => {
  let component: AddNewComparatorComponent;
  let fixture: ComponentFixture<AddNewComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewComparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
