import { TestBed } from '@angular/core/testing';

import { BreakTestMiddlewareService } from './break-test.middleware.service';

describe('BreakTestMiddlewareService', () => {
  let service: BreakTestMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakTestMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
