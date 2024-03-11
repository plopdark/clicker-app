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
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  public routerLinks = this.service.routerLinks;
  public loginForm = this.auth.loginForm;
  public isSignUp: boolean = false;

  public icon = null;

  constructor(
    private readonly router: Router,
    private readonly service: ClickerService,
    private readonly auth: AuthService
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

  public onFileSelected(event: any) {
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.icon = event.target.result;
      };
    }
  }

  public onDelete(): void {
    this.auth.onDelete();
  }
}
