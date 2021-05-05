import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGComponent } from './add-g.component';

describe('AddGComponent', () => {
  let component: AddGComponent;
  let fixture: ComponentFixture<AddGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
