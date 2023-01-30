import { TestBed } from '@angular/core/testing';

import { VersioningMiddlewareService } from './versioning.middleware.service';

describe('VersioningMiddlewareService', () => {
  let service: VersioningMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersioningMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
