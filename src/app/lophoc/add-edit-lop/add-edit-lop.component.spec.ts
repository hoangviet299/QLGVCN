import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLopComponent } from './add-edit-lop.component';

describe('AddEditLopComponent', () => {
  let component: AddEditLopComponent;
  let fixture: ComponentFixture<AddEditLopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
