import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentGroup } from '../../student-group/student-group';

@Injectable({
  providedIn: 'root'
})
export class StudentGroupService {

  private url = "/api/studentgroups";

  constructor(private http: HttpClient) {
  }

  getStudentGroups() {
    return this.http.get(this.url);
  }

  getStudentGroup(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createStudentGroup(studentGroup: StudentGroup) {
    return this.http.post(this.url, studentGroup);
  }

  updateStudentGroup(id: number, studentGroup: StudentGroup) {
    return this.http.put(this.url + '/' + id, studentGroup);
  }

  deleteStudentGroup(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
