import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OverlayComponent } from '../../shared/components/overlay/overlay.component';

import { MainService } from '../../shared/services/main.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, OverlayComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public isRegged: boolean = false;
  public clickCount: number = this.main.clickCount;

  constructor(public main: MainService) {}

  ngOnInit(): void {
    this.main.getClickCount().subscribe((count) => (this.clickCount = count));
  }

  public increaseClicks(): void {
    this.main.increaseClicks();
  }
}
