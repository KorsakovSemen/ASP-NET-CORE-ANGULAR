import { StudentGroup } from "./student.component";

export enum Gender {
  M = 'M',
  F = 'F'
}

export class Student {
  id: number;
  gender: Gender;
  middleName: string;
  firstName: string;
  lastName: string;
  nickName?: string;
  studentGroups: StudentGroup;
}
