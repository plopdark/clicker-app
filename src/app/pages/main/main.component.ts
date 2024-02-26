import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from '../../shared/components/overlay/overlay.component';
import { MainService } from '../../shared/services/main.service';
import { Subscription } from 'rxjs';

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

  constructor(private readonly main: MainService) {}

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
