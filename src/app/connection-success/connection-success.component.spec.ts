import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionSuccessComponent } from './connection-success.component';

describe('SuccessComponent', () => {
  let component: ConnectionSuccessComponent;
  let fixture: ComponentFixture<ConnectionSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectionSuccessComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
