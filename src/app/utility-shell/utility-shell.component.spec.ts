import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityShellComponent } from './utility-shell.component';

describe('UtilityShellComponent', () => {
  let component: UtilityShellComponent;
  let fixture: ComponentFixture<UtilityShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
