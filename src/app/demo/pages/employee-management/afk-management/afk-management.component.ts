import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-afk-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afk-management.component.html',
  styleUrl: './afk-management.component.scss'
})
export class AFKManagementComponent {
  activeTab = 'active';

  activeData = [
    { name: 'John Doe', role: 'UI/UX Designer', startTime: '11:51:00', expectedReturn: '12:51:00', elapsedTime: '20:51' },
    { name: 'Jane Doe', role: 'Frontend Developer', startTime: '10:00:00', expectedReturn: '11:00:00', elapsedTime: '10:00' },
    { name: 'Jane Doe', role: 'Frontend Developer', startTime: '10:00:00', expectedReturn: '11:00:00', elapsedTime: '10:00' },
    { name: 'Jane Doe', role: 'Frontend Developer', startTime: '10:00:00', expectedReturn: '11:00:00', elapsedTime: '10:00' }
  ];

  incompleteData = [
    { name: 'John Doe', afkFor: '01:15:00', lateAttend: 'Yes', task: 'Design on Cypso Admin Panel', toBeCovered: '00:45:00' },
    { name: 'Jane Doe', afkFor: '00:59:00', lateAttend: 'No', task: 'Fix Bugs', toBeCovered: '01:15:00' },
    { name: 'Jane Doe', afkFor: '00:59:00', lateAttend: 'No', task: 'Fix Bugs', toBeCovered: '01:15:00' }
  ];

  completeData = [
    { name: 'John Doe', lateAttend: 'Yes', task: 'Design on Cypso Admin Panel', finishedOn: 'March 30, 2021', lateAttendRow: 2 },
    { name: 'John Doe', lateAttend: 'Yes', task: 'Design on Cypso Admin Panel', finishedOn: 'March 30, 2021', lateAttendRow: 2 },
    { name: 'Jane Doe', lateAttend: 'No', task: 'Completed Testing', finishedOn: 'March 28, 2021', lateAttendRow: 0 }
  ];

  showTab(tabName: string) {
    this.activeTab = tabName;
  }
}
