import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasInvestigacionComponent } from './lineas-investigacion.component';

describe('LineasInvestigacionComponent', () => {
  let component: LineasInvestigacionComponent;
  let fixture: ComponentFixture<LineasInvestigacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineasInvestigacionComponent]
    });
    fixture = TestBed.createComponent(LineasInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
