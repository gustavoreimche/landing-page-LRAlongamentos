import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutoraComponent } from './instrutora.component';

describe('InstrutoraComponent', () => {
  let component: InstrutoraComponent;
  let fixture: ComponentFixture<InstrutoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrutoraComponent]
    });
    fixture = TestBed.createComponent(InstrutoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
