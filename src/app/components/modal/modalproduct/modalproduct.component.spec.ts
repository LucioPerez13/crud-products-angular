import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalproductComponent } from './modalproduct.component';

describe('ModalproductComponent', () => {
  let component: ModalproductComponent;
  let fixture: ComponentFixture<ModalproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
