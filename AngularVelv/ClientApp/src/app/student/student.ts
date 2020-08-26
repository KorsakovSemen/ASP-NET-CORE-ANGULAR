import { StudentGroup } from "../student-group/student-group";

export enum Gender {
  M = 0,
  F = 1
}

export class Student {
  id: number;
  stringGender: string;
  gender: Gender;
  middleName: string;
  firstName: string;
  lastName: string;
  nickName?: string;
  studentGroups: StudentGroup;
}
