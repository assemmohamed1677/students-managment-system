import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudentComponent {
  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    department: new FormControl('', [Validators.required]),
    gpa: new FormControl('', [Validators.required])
  });

  constructor(private service: StudentsService, private router: Router) {}

  onSubmit() {
    console.log('Form Values:', this.studentForm.value);
    
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;
      
      const newStudent: any = {
        ...formValue,
        id: Date.now(), // Unique ID
        GPA: Number(formValue.gpa), // Ensure it's a number
        age: Number(formValue.age), // Ensure it's a number
        enrollmentDate: new Date().toISOString().split('T')[0],
        isActive: true
      };

      this.service.addStudent(newStudent);
      this.router.navigate(['/students']);
    } else {
      alert('Please fill all required fields correctly!');
      console.log('Errors:', this.studentForm.errors);
    }
  }
}