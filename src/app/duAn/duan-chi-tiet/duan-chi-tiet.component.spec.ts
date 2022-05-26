import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanChiTietComponent } from './duan-chi-tiet.component';

describe('DuanChiTietComponent', () => {
  let component: DuanChiTietComponent;
  let fixture: ComponentFixture<DuanChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuanChiTietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuanChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
