import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlongamentosComponent } from './alongamentos.component';

describe('AlongamentosComponent', () => {
  let component: AlongamentosComponent;
  let fixture: ComponentFixture<AlongamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlongamentosComponent]
    });
    fixture = TestBed.createComponent(AlongamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
