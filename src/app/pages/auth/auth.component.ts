import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClickerService } from '../../shared/services/clicker.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  public routerLinks = this.service.routerLinks;
  public loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
    repeatPassword: new FormControl('', [Validators.required]),
    rememberMe: new FormControl<boolean>(false),
  });
  public isSignUp: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly service: ClickerService
  ) {}

  ngOnInit(): void {
    const savedFormData = localStorage.getItem('loginFormData');
    if (savedFormData) {
      this.loginForm.setValue(JSON.parse(savedFormData));
    }
  }

  public onSubmit() {
    if (this.isSignUp) {
      if (
        this.loginForm.valid &&
        this.loginForm.value.password === this.loginForm.value.repeatPassword
      ) {
        localStorage.setItem(
          'loginFormData',
          JSON.stringify(this.loginForm.value)
        );
        this.router.navigate([this.routerLinks.Main]);
      }
    } else {
      if (this.loginForm.valid) {
        localStorage.setItem(
          'loginFormData',
          JSON.stringify(this.loginForm.value)
        );
        this.router.navigate([this.routerLinks.Main]);
      }
    }
  }

  @Output() public onDelete(): void {
    localStorage.removeItem('loginFormData');
    this.loginForm.reset();
  }
}
