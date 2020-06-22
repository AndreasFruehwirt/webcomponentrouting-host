import { TestBed } from '@angular/core/testing';

import { MultiLocationStrategyService } from './multi-location-strategy.service';

describe('MultiLocationStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiLocationStrategyService = TestBed.get(MultiLocationStrategyService);
    expect(service).toBeTruthy();
  });
});
