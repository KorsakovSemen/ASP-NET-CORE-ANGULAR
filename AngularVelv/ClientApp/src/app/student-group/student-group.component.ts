import { Component, OnInit } from '@angular/core';
import { StudentGroup } from './student-group';
import { StudentGroupService } from '../services/student-group/student-group.service';

@Component({
  selector: 'app-student-group',
  templateUrl: './student-group.component.html',
  styleUrls: ['./student-group.component.css']
})
export class StudentGroupComponent implements OnInit {

  studentGroup: StudentGroup = new StudentGroup();
  public StudentGroups: StudentGroup[];
  tableMode: boolean = true;

  constructor(private studentGroupService: StudentGroupService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.studentGroupService.getStudentGroups().subscribe((data: StudentGroup[]) => this.StudentGroups = data);
  }
  save() {
    if (this.studentGroup.groupId == null) {
      this.studentGroupService.createStudentGroup(this.studentGroup)
        .subscribe((data: StudentGroup) => this.StudentGroups.push(data));
    } else {
      this.studentGroupService.updateStudentGroup(this.studentGroup.groupId, this.studentGroup)
        .subscribe(data => this.load());
    }
    this.cancel();
  }
  editStudentGroup(s: StudentGroup) {
    this.studentGroup = s;
  }
  cancel() {
    this.studentGroup = new StudentGroup();
    this.tableMode = true;
  }
  delete(s: StudentGroup) {
    this.studentGroupService.deleteStudentGroup(s.groupId)
      .subscribe(data => this.load());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }

}

