import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionSelectionComponent } from './institution-selection.component';

describe('InstitutionSelectionComponent', () => {
  let component: InstitutionSelectionComponent;
  let fixture: ComponentFixture<InstitutionSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
