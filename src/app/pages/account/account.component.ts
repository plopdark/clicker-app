import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';

import { ClickerService } from '../../shared/services/clicker.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule, BackButtonComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  public readonly icon = this.service.icon;

  constructor(private service: ClickerService) {}
}
