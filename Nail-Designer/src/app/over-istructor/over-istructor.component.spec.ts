import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverIstructorComponent } from './over-istructor.component';

describe('OverIstructorComponent', () => {
  let component: OverIstructorComponent;
  let fixture: ComponentFixture<OverIstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverIstructorComponent]
    });
    fixture = TestBed.createComponent(OverIstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
