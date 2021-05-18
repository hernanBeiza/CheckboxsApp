import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCheckboxsComponent } from './simple-checkboxs.component';

describe('SimpleCheckboxsComponent', () => {
  let component: SimpleCheckboxsComponent;
  let fixture: ComponentFixture<SimpleCheckboxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCheckboxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCheckboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
