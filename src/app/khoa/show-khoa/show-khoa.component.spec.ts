import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKhoaComponent } from './show-khoa.component';

describe('ShowKhoaComponent', () => {
  let component: ShowKhoaComponent;
  let fixture: ComponentFixture<ShowKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
