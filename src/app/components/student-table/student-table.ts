import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-table.html',
  styleUrl: './student-table.css'
})
export class StudentTableComponent {
  // Requirement: Use @Input to receive data
  @Input() studentList: Student[] = [];

  // Requirement: Use @Output with EventEmitter to send events to parent
  @Output() deleteRequest = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteRequest.emit(id);
  }
}