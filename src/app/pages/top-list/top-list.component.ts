import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';
import { ServiceService } from '../../shared/services/service.service';

@Component({
  selector: 'app-top-list',
  standalone: true,
  imports: [RouterModule, BackButtonComponent],
  templateUrl: './top-list.component.html',
  styleUrl: './top-list.component.scss',
})
export class TopListComponent {
  public readonly icon = this.service.icon;

  constructor(private service: ServiceService) {}
}
