import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  // Initial dummy data
  private initialStudents: Student[] = [
    {
      id: 1,
      firstName: "Ali",
      lastName: "Hassan",
      age: 21,
      gender: "Male",
      email: "ali.hassan@email.com",
      phone: "01000000000",
      address: "12 Main Street",
      city: "Cairo",
      country: "Egypt",
      department: "Computer Science",
      level: 3,
      GPA: 3.2,
      enrollmentDate: "2023-09-01",
      isActive: true
    }
  ];

  // 1. BehaviorSubject holds the current state
  private studentsSubject = new BehaviorSubject<Student[]>(this.initialStudents);

  // 2. Observable for components to "listen" to
  students$: Observable<Student[]> = this.studentsSubject.asObservable();

  constructor() {}

  // Add a student
  addStudent(student: Student) {
    const currentStudents = this.studentsSubject.value;
    this.studentsSubject.next([...currentStudents, student]);
  }

  // Delete a student
  deleteStudent(id: number) {
    const updatedStudents = this.studentsSubject.value.filter(s => s.id !== id);
    this.studentsSubject.next(updatedStudents);
  }

  // Get a single student by ID
  getStudentById(id: number): Student | undefined {
    return this.studentsSubject.value.find(s => s.id === id);
  }
}