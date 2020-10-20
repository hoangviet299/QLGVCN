import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKhoaComponent } from './add-edit-khoa.component';

describe('AddEditKhoaComponent', () => {
  let component: AddEditKhoaComponent;
  let fixture: ComponentFixture<AddEditKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
