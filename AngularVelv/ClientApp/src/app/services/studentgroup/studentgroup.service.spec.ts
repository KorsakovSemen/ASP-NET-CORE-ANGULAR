import { TestBed } from '@angular/core/testing';
import { StudentGroupService } from './studentgroup.service';


describe('StudentgroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentGroupService = TestBed.get(StudentGroupService);
    expect(service).toBeTruthy();
  });
});
