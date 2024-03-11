import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-input',
  standalone: true,
  imports: [],
  templateUrl: './account-input.component.html',
  styleUrl: './account-input.component.scss',
})
export class AccountInputComponent {
  @Input() label: string = '';
}
