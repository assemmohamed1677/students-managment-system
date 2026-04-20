import { Routes } from '@angular/router';
// 1. Make sure this matches the class name in your home.ts file
import { Home } from './components/home/home'; 
// 2. Import the Component, NOT the Service
import { StudentsComponent } from './components/students/students'; 
import { AddStudentComponent } from './components/add-student/add-student';
import { StudentDetailsComponent } from './components/student-details/student-details';

export const routes: Routes = [
  { path: 'home', component: Home }, // Fixed
  { path: 'students', component: StudentsComponent }, // Fixed: Changed from Service to Component
  { path: 'add-student', component: AddStudentComponent },
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];