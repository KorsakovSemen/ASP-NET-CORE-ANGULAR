import { Component, OnInit } from '@angular/core';
import { Student, Gender } from './student';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  providers: [StudentService]
})

export class StudentComponent implements OnInit {

  student: Student = new Student();
  public students: Student[];
  tableMode: boolean = true; 

  constructor(private studentService: StudentService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.studentService.getStudents().subscribe((data: Student[]) => this.students = data);
  }
  save() {
    if (this.student.id == null) {
      this.studentService.createStudent(this.student)
        .subscribe((data: Student) => this.students.push(data));
    } else {
      this.studentService.updateStudent(this.student.id, this.student)
        .subscribe(data => this.load());
    }
    this.cancel();
  }
  editStudent(s: Student) {
    this.student = s;
  }
  cancel() {
    this.student = new Student();
    this.tableMode = true;
  }
  delete(s: Student) {
    this.studentService.deleteStudent(s.id)
      .subscribe(data => this.load());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }

}

