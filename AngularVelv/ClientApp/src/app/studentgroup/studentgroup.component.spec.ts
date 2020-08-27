import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentgroupComponent } from './studentgroup.component';

describe('StudentgroupComponent', () => {
  let component: StudentgroupComponent;
  let fixture: ComponentFixture<StudentgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
