import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from '../../shared/components/overlay/overlay.component';
import { Subscription } from 'rxjs';
import { ClickerService } from '../../shared/services/clicker.service';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, OverlayComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit, OnDestroy {
  public clickCount: number = this.service.user.clickCount;
  public clickCountSubscription: Subscription | undefined;
  public routerLinks = this.service.routerLinks;
  public loginForm = this.auth.loginForm;

  constructor(
    private readonly service: ClickerService,
    private readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    this.clickCountSubscription = this.service
      .getClickCount()
      .subscribe((count) => (this.clickCount = count));
  }

  public increaseClicks(): void {
    this.service.increaseClicks();
  }

  public deleteAccount(): void {
    this.auth.onDelete();
  }

  ngOnDestroy(): void {
    if (this.clickCountSubscription) {
      this.clickCountSubscription.unsubscribe();
    }
  }
}
