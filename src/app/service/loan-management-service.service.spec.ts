import { TestBed } from '@angular/core/testing';

import { LoanManagementServiceService } from './loan-management-service.service';

describe('LoanManagementServiceService', () => {
  let service: LoanManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
