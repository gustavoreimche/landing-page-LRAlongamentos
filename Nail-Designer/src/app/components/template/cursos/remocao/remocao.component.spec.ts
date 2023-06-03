import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemocaoComponent } from './remocao.component';

describe('RemocaoComponent', () => {
  let component: RemocaoComponent;
  let fixture: ComponentFixture<RemocaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemocaoComponent]
    });
    fixture = TestBed.createComponent(RemocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
