import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  // students: Student[] = [
  //   {id: 0, name: 'Имя', surname: 'Фамилия'},
  //   {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
  //   {id: 2, name: 'Имя 2', surname: 'Фамилия 2'}
  // ];
  private studentsUrl = 'api/base/students';

  constructor(private http: HttpClient) { }
  // getAllStudents(): Student[] {
  //   console.log('count of students' + this.students.length);
  //   return this.students;
  // }
  // addNewStudent(student: Student): void {
  //   console.log('addNewStudent');
  //   this.students.push(student);
  // }

  // editStudent(student: Student): void {
  //   console.log('editStudent');
  //   this.students.splice(0,1);
  //   // alert(students);
  // }
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  addNewStudent(student: Student): Observable<Student> {
    console.log('addNewStudent');
    return this.http.post<Student>(this.studentsUrl, student).pipe();
  }
  editStudent(student: Student): Observable<Student> {
    console.log('editStudent');
    return this.http.put<Student>(this.studentsUrl, student).pipe();
  }
  deleteStudent(student: Student): Observable<Student> {
    console.log(student.id);
    return this.http.delete<Student>(this.studentsUrl + '/' + student.id).pipe();
  }
}
