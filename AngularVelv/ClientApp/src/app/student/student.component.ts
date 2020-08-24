import { Component, Inject, OnInit } from '@angular/core';
import { StudentService } from '../services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  providers: [StudentService]
})

export class StudentComponent implements OnInit {

  student: Student = new Student();
  public Students: Student[];
  //readonly rootURL = getBaseUrl() + 'api/Students';

  constructor(private studentService: StudentService) {
    //http.get<Student[]>(baseUrl + 'api/Students').subscribe(result => {
    //  this.Students = result;
    //}, error => console.error(error));
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.studentService.getStudents().subscribe((data: Student[]) => this.Students = data);
  }
  save() {
    if (this.student.id == null) {
      this.studentService.createStudent(this.student)
        .subscribe((data: Student) => this.Students.push(data));
    } else {
      this.studentService.updateStudent(this.student)
        .subscribe(data => this.load());
    }
    this.cancel();
  }
  editProduct(p: Student) {
    this.student = p;
  }
  cancel() {
    this.student = new Student();
    //this.tableMode = true;
  }
  delete(s: Student) {
    this.studentService.deleteStudent(s.id)
      .subscribe(data => this.load());
  }
  add() {
    this.cancel();
    //this.tableMode = false;
  }

}

enum Gender {
  M, F
}

export class Student {
  id: number;
  gender: Gender;
  middleName: string;
  firstName: string;
  lastName: string;
  nickName?: string;
  fullName: string;
  studentGroups: StudentGroup;
}

interface StudentGroup {
}

