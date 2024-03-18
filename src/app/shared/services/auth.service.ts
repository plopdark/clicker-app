import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    repeatPassword: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    rememberMe: new FormControl<boolean>(false),
  });

  get name() {
    return this.loginForm.controls.name;
  }

  public onDelete(): void {
    localStorage.removeItem('loginFormData');
    this.loginForm.reset();
  }
}
