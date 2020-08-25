import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, Gender } from '../../student/student';

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
    if (student.gender == Gender.F)
      student.gender = 1;
    else if (student.gender == Gender.M)
      student.gender = 0      
    return this.http.post(this.url, student);
  }
  updateStudent(student: Student) {

    return this.http.put(this.url, student);
  }
  deleteStudent(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
