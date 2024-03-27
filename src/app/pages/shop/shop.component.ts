import { Level } from './../../utilities/const/level.const';
import { Component, OnInit } from '@angular/core';
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
export class ShopComponent implements OnInit {
  public isInfoFirstOpened: boolean = false;
  public isInfoSecondOpened: boolean = false;
  public clickCount: number = this.service.user.clickCount;
  public routerLinks = this.service.routerLinks;
  public currentLevel: number = 1;
  public resetAsk = false;
  public isAutoClickerBought = false;
  public isAutoClickerActive = this.service.autoClickerActive;

  public readonly botImg = this.service.bot;
  public readonly clickImg = this.service.click;

  constructor(private readonly service: ClickerService) {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.service.user = JSON.parse(userData);
      this.currentLevel = this.service.user.level;
    }

    const clicking = localStorage.getItem('autoClicker');
    if (clicking) {
      this.isAutoClickerBought = JSON.parse(clicking);
    }
  }

  ngOnInit(): void {}

  public openInfoFirst(): void {
    this.isInfoFirstOpened = true;
  }

  public openInfoSecond(): void {
    this.isInfoSecondOpened = true;
  }

  public overlayClosed(): void {
    this.isInfoFirstOpened = false;
    this.isInfoSecondOpened = false;
    this.resetAsk = false;
  }

  public increaseLevel() {
    if (
      this.currentLevel < this.service.maxLevel &&
      this.service.increaseLevel()
    ) {
      this.currentLevel = this.service.user.level;

      console.log(this.currentLevel);
      localStorage.setItem('user', JSON.stringify(this.service.user));
    }
  }

  public resetAsking() {
    this.resetAsk = true;
  }

  public resetUpgrades() {
    this.service.user.perClick = 1;
    this.service.user.level = 1;
    localStorage.setItem('user', JSON.stringify(this.service.user));
    localStorage.setItem('user', JSON.stringify(this.service.user));
    this.overlayClosed();
  }

  public autoClicker() {
    if (this.isAutoClickerActive) {
      this.service.autoClicking();
    }
  }

  public buyAutoClicker() {
    if (this.clickCount > 500) {
      this.clickCount -= 500;
      this.autoClicker();
      this.isAutoClickerBought = true;
      localStorage.setItem(
        'autoClicker',
        JSON.stringify(this.isAutoClickerBought)
      );
    }
  }

  public turnOffAutoClicker() {
    this.service.turnOffAutoClicker();
    this.isAutoClickerActive = false;
  }

  public turnOnAutoClicker() {
    this.service.turnOnAutoClicker();
    this.isAutoClickerActive = true;
  }
}
