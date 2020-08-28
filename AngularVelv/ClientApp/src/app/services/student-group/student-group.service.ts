import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentGroup } from '../../components/student-group/student-group';

@Injectable({
  providedIn: 'root'
})

export class StudentGroupService {

  private url = "api/studentgroups";

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.url);
  }

  getStudent(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createStudent(student: StudentGroup) {
    return this.http.post(this.url, student);
  }

  updateStudent(id: number, student: StudentGroup) {
    return this.http.put(this.url + '/' + id, student);
  }

  deleteStudent(studentId: number, groupId: number) {
    return this.http.delete(this.url + '/' + studentId + '/' + groupId);
  }

}
