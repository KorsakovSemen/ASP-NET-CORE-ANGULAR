import { TestBed } from '@angular/core/testing';

import { StudentgroupService } from './studentgroup.service';

describe('StudentgroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentgroupService = TestBed.get(StudentgroupService);
    expect(service).toBeTruthy();
  });
});
