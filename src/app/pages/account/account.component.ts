import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';
import { AccountInputComponent } from '../../shared/components/account-input/account-input.component';
import { ClickerService } from '../../shared/services/clicker.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule, BackButtonComponent, AccountInputComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  public readonly icon = this.service.icon;
  public routerLinks = this.service.routerLinks;

  constructor(
    private readonly service: ClickerService,
    private readonly auth: AuthService
  ) {}
}
