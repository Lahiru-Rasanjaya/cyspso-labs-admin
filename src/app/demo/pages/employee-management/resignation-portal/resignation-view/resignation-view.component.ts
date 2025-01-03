import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-resignation-view',
  standalone: true,
  imports: [],
  templateUrl: './resignation-view.component.html',
  styleUrl: './resignation-view.component.scss'
})
export class ResignationViewComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit(); 
  }

}
