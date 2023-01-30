import { TestBed } from '@angular/core/testing';

import { BreakTestApiService } from './break-test.api.service';

describe('BreakTestApiService', () => {
  let service: BreakTestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakTestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
