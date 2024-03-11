import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';
import { OverlayComponent } from '../../shared/components/overlay/overlay.component';
import { ShopItemsComponent } from '../../shared/components/shop-items/shop-items.component';
import { ClickerService } from '../../shared/services/clicker.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    BackButtonComponent,
    RouterModule,
    OverlayComponent,
    CommonModule,
    ShopItemsComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  public isInfoFirstOpened: boolean = false;
  public isInfoSecondOpened: boolean = false;
  public clickCount: number = this.service.clickCount;
  public routerLinks = this.service.routerLinks;

  public readonly botImg = this.service.bot;
  public readonly clickImg = this.service.click;

  constructor(private readonly service: ClickerService) {}

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
