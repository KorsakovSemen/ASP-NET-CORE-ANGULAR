import { Injectable } from '@angular/core';
import { Student } from '../../student/student.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private url = "/api/students";

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.url);
  }

  getStudent(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createStudent(student: Student) {
    return this.http.post(this.url, student);
  }
  updateStudent(student: Student) {

    return this.http.put(this.url, student);
  }
  deleteStudent(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
