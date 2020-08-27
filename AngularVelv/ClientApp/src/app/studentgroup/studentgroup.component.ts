import { Component, OnInit } from '@angular/core';
import { StudentGroup } from '../student-group/student-group';
import { StudentGroupService } from '../services/studentgroup/studentgroup.service';

@Component({
  selector: 'app-studentgroup',
  templateUrl: './studentgroup.component.html',
  styleUrls: ['./studentgroup.component.css']
})
export class StudentgroupComponent implements OnInit {

  studentGroup: StudentGroup = new StudentGroup();
  public studentGroups: StudentGroup[];
  tableMode: boolean = true;

  constructor(private studentService: StudentGroupService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.studentService.getStudents().subscribe((data: StudentGroup[]) => this.studentGroups = data);
  }
  save() {
    if (this.studentGroup.studentId == null && this.studentGroup.groupId == null) {
      this.studentService.createStudent(this.studentGroup)
        .subscribe((data: StudentGroup) => this.studentGroups.push(data));
    } else {
      this.studentService.updateStudent(this.studentGroup.studentId, this.studentGroup)
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
    this.studentService.deleteStudent(s.studentId)
      .subscribe(data => this.load());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }


}
