import { TestBed } from '@angular/core/testing';

import { ApiproduitService } from './apiproduit.service';

describe('ApiproduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiproduitService = TestBed.get(ApiproduitService);
    expect(service).toBeTruthy();
  });
});
