import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agreement-generator',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './agreement-generator.component.html',
  styleUrl: './agreement-generator.component.scss'
})
export class AgreementGeneratorComponent {

}
