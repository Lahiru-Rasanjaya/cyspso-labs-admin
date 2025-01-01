import { Component, Optional } from '@angular/core';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  currentDate: string;

  constructor() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'short' }); // Get short month name
    const day = String(date.getDate()).padStart(2, '0'); // Ensure day is 2 digits

    this.currentDate = `${year} ${month} ${day}`; // Combine into desired format
  }
}


