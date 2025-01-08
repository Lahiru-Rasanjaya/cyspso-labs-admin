import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SendViaEmailComponent } from './send-via-email/send-via-email.component';
import { ResignationViewComponent } from '../../resignation-portal/resignation-view/resignation-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agreement-preview',
  standalone: true,
  imports: [CommonModule ,MatIconModule, SendViaEmailComponent],
  templateUrl: './agreement-preview.component.html',
  styleUrl: './agreement-preview.component.scss'
})
export class AgreementPreviewComponent {
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
