import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ResignationViewComponent } from './resignation-view/resignation-view.component';

interface TabData {
  name: string;
  role: string;
  submission: string;
  lastDay: string;
  status: string;
}

@Component({
  selector: 'app-resignation-portal',
  standalone: true,
  imports: [CommonModule, MatIconModule, ResignationViewComponent],
  templateUrl: './resignation-portal.component.html',
  styleUrl: './resignation-portal.component.scss'
})
export class ResignationPortalComponent {

  // popup start 
  isPopupVisible = false; 

  showPopup(): void {
    this.isPopupVisible = true; 
  }

  closePopup(): void {
    this.isPopupVisible = false; 
  }
  // popup end 

  statuses: string[] = ['pending', 'approved', 'rejected'];
  selectedStatus: string = 'pending';

  data: TabData[] = [
      { name: 'John Doe', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'pending' },
      { name: 'John Doe', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'pending' },
      { name: 'John Doe', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'pending' },
      { name: 'Jane Smith', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'approved' },
      { name: 'Jane Smith', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'approved' },
      { name: 'Jane Smith', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'approved' },
      { name: 'Mike Johnson', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'rejected' },
      { name: 'Mike Johnson', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'rejected' },
      { name: 'Mike Johnson', role: 'UI/UX Designer', submission: 'March 30, 2021', lastDay: 'April 30, 2021', status: 'rejected' }
  ];

  filteredData: TabData[] = this.filterData(this.selectedStatus);

  onTabClick(status: string): void {
      this.selectedStatus = status;
      this.filteredData = this.filterData(status);
  }

  filterData(status: string): TabData[] {
      return this.data.filter(item => item.status === status);
  }

  getStatusClass(status: string): string {
      return `status-${status.toLowerCase()}`;
  }
}
