import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentsService } from '../../services/students';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetailsComponent implements OnInit {
  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: StudentsService
  ) {}

  ngOnInit() {
    // Requirement: Use route parameter to find student
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.service.getStudentById(id);
  }
}