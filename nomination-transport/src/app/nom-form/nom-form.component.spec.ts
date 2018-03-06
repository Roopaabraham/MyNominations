import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomFormComponent } from './nom-form.component';

describe('NomFormComponent', () => {
  let component: NomFormComponent;
  let fixture: ComponentFixture<NomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
