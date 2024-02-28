import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from '../../shared/components/overlay/overlay.component';
import { MainService } from '../../shared/services/main.service';
import { Subscription } from 'rxjs';
import { ClickerService } from '../../shared/services/clicker.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, OverlayComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit, OnDestroy {
  public clickCount: number = this.main.clickCount;
  public clickCountSubscription: Subscription | undefined;
  public routerLinks = this.service.routerLinks;

  constructor(
    private readonly main: MainService,
    private readonly service: ClickerService
  ) {}

  ngOnInit(): void {
    this.clickCountSubscription = this.main
      .getClickCount()
      .subscribe((count) => (this.clickCount = count));
  }

  public increaseClicks(): void {
    this.main.increaseClicks();
  }

  ngOnDestroy(): void {
    if (this.clickCountSubscription) {
      this.clickCountSubscription.unsubscribe();
    }
  }
}
