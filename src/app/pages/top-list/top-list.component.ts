import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';

import { RouterLinkEnum } from '../../utilities/enums/router-link.enum';

import { ClickerService } from '../../shared/services/clicker.service';
@Component({
  selector: 'app-top-list',
  standalone: true,
  imports: [RouterModule, BackButtonComponent],
  templateUrl: './top-list.component.html',
  styleUrl: './top-list.component.scss',
})
export class TopListComponent {
  public readonly icon = this.service.icon;
  public routerLinks = this.service.routerLinks;

  constructor(private service: ClickerService) {}
}
