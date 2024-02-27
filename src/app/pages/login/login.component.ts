import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
    repeatPassword: new FormControl(''),
    rememberMe: new FormControl<boolean>(false),
  });
  public isSignUp: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public onSubmit() {
    console.log(this.loginForm.value);
  }

  public onSignUp(): void {
    this.isSignUp = true;
  }

  public onLogIn(): void {
    this.isSignUp = false;
  }
}
