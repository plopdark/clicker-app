import { Component } from '@angular/core';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../../shared/services/service.service';
import { OverlayComponent } from '../../shared/components/overlay/overlay.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [BackButtonComponent, RouterModule, OverlayComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  public isInfoFirstOpened: boolean = false;
  public isInfoSecondOpened: boolean = false;

  public readonly botImg = this.service.bot;
  public readonly clickImg = this.service.click;

  constructor(private service: ServiceService) {}

  public openInfoFirst(): void {
    this.isInfoFirstOpened = true;
  }

  public openInfoSecond(): void {
    this.isInfoSecondOpened = true;
  }

  public overlayClosed(): void {
    this.isInfoFirstOpened = false;
    this.isInfoSecondOpened = false;
  }
}
