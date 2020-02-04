import { TestBed, inject } from '@angular/core/testing';

import { HybridTheoryService } from './hybrid-theory.service';

describe('HybridTheoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HybridTheoryService]
    });
  });

  it('should be created', inject([HybridTheoryService], (service: HybridTheoryService) => {
    expect(service).toBeTruthy();
  }));
});
