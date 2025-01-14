import { Component, EventEmitter, Output  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leave-approval-view',
  standalone: true,
  imports: [],
  templateUrl: './leave-approval-view.component.html',
  styleUrl: './leave-approval-view.component.scss'
})
export class LeaveApprovalViewComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit(); 
  }
}
