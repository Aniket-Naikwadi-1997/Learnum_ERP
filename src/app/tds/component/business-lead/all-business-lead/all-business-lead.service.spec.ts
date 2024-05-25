import { TestBed } from '@angular/core/testing';

import { AllBusinessLeadService } from './all-business-lead.service';

describe('AllBusinessLeadService', () => {
  let service: AllBusinessLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBusinessLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
