import { Component, EventEmitter, Output  } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-send-via-email',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './send-via-email.component.html',
  styleUrl: './send-via-email.component.scss'
})
export class SendViaEmailComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit(); 
  }
}
