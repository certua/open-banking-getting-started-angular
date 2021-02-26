import { TestBed } from '@angular/core/testing';

import { CertuaEventbusService } from './certua-eventbus.service';

describe('CertuaEventbusService', () => {
  let service: CertuaEventbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertuaEventbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
