import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public Students: Student[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Student[]>(baseUrl + 'api/Students').subscribe(result => {
      this.Students = result;
    }, error => console.error(error));
  }
}

enum Gender {
  M, F
}

interface Student {
  id: number;
  gender: Gender;
  middleName: string;
  firstName: string;
  lastName: string;
  nickName: string;
  fullName: string;
  studentGroups: StudentGroup;
}

interface StudentGroup {
}

