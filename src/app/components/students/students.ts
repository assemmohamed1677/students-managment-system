import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../../services/students';
import { StudentTableComponent } from '../student-table/student-table';
import { Observable } from 'rxjs';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, StudentTableComponent],
  templateUrl: './students.html'
})
export class StudentsComponent {
  // Requirement: Use Observable and Async Pipe
  students$: Observable<Student[]>;

  constructor(private studentsService: StudentsService) {
    this.students$ = this.studentsService.students$;
  }

  handleDelete(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentsService.deleteStudent(id);
    }
  }
}