import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public isSignUp: boolean = false;

  constructor() {}

  public onSignUp(): void {
    this.isSignUp = true;
  }

  public onLogIn(): void {
    this.isSignUp = false;
  }
}
