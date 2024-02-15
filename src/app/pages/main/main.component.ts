import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from '../../shared/components/overlay/overlay.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, OverlayComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  isRegged: boolean = false;
  clickCount: number = 0;

  ngOnInit(): void {
    const storedClicks = localStorage.getItem('clickCount');
    if (storedClicks) {
      this.clickCount = parseInt(storedClicks);
    }
  }

  public increaseClicks(): void {
    this.clickCount++;
    localStorage.setItem('clickCount', this.clickCount.toString());
  }
}
