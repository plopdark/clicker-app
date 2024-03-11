import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
    repeatPassword: new FormControl('', [Validators.required]),
    image: new FormControl(null),
    rememberMe: new FormControl<boolean>(false),
  });

  public onDelete(): void {
    localStorage.removeItem('loginFormData');
    this.loginForm.reset();
  }
}
