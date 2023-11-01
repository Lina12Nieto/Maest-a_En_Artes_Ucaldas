import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSistemaComponent } from './error-sistema.component';

describe('ErrorSistemaComponent', () => {
  let component: ErrorSistemaComponent;
  let fixture: ComponentFixture<ErrorSistemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorSistemaComponent]
    });
    fixture = TestBed.createComponent(ErrorSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
