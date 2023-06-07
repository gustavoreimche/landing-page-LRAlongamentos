import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverInstructorComponent } from './over-instructor.component';

describe('OverInstructorComponent', () => {
  let component: OverInstructorComponent;
  let fixture: ComponentFixture<OverInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverInstructorComponent]
    });
    fixture = TestBed.createComponent(OverInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
