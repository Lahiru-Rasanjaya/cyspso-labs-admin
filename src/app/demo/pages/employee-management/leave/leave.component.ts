import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LeaveApprovalViewComponent } from './leave-approval-view/leave-approval-view.component';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, MatIconModule, LeaveApprovalViewComponent],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})
export class LeaveComponent {
 // popup start 
 isPopupVisible = false; 

 showPopup(): void {
   this.isPopupVisible = true; 
 }

 closePopup(): void {
   this.isPopupVisible = false; 
 }
 // popup end 
}
