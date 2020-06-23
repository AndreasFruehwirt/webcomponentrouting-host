import { TestBed } from '@angular/core/testing';

import { HostLocationService } from './host-location.service';

describe('HostLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostLocationService = TestBed.get(HostLocationService);
    expect(service).toBeTruthy();
  });
});
