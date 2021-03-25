import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCountComponent } from './review-count.component';

describe('ReviewCountComponent', () => {
  let component: ReviewCountComponent;
  let fixture: ComponentFixture<ReviewCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
