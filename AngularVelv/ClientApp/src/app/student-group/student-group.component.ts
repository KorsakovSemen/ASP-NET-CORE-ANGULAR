import { Component, OnInit } from '@angular/core';
import { StudentGroup } from './student-group';
import { StudentGroupService } from '../services/student-group/student-group.service';
import { Student } from '../student/student';
import { StudentService } from '../services/student/student.service';
import { GroupService } from '../services/group/group.service';
import { Group } from '../group/group';

@Component({
  selector: 'app-student-group',
  templateUrl: './student-group.component.html',
  styleUrls: ['./student-group.component.css']
})
export class StudentgroupComponent implements OnInit {

  studentGroup: StudentGroup = new StudentGroup();
  public students: Student[];
  public groups: Group[];
  public studentGroups: StudentGroup[];
  tableMode: boolean = true;

  constructor(private studentGroupService: StudentGroupService, private studentService: StudentService, private groupService: GroupService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.studentGroupService.getStudents().subscribe((data: StudentGroup[]) => this.studentGroups = data);
    this.studentService.getStudents().subscribe((data: Student[]) => this.students = data);
    this.groupService.getGroups().subscribe((data: Group[]) => this.groups = data);
  }
  save() {

    if (!this.studentGroups.includes(this.studentGroup)) {
      this.studentGroupService.createStudent(this.studentGroup)
        .subscribe((data: StudentGroup) => this.studentGroups.push(data));
    } else {
      this.studentGroupService.updateStudent(this.studentGroup.studentId, this.studentGroup)
        .subscribe(data => this.load());
    }
    this.cancel();
  }
  editStudentInGroup(s: StudentGroup) {
    this.studentGroup = s;
  }
  cancel() {
    this.studentGroup = new StudentGroup();
    this.tableMode = true;
  }
  delete(s: StudentGroup) {
    this.studentGroupService.deleteStudent(s.studentId)
      .subscribe(data => this.load());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }


}
