import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCheckboxsComponent } from './formulario-checkboxs.component';

describe('FormularioCheckboxsComponent', () => {
  let component: FormularioCheckboxsComponent;
  let fixture: ComponentFixture<FormularioCheckboxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCheckboxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCheckboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
