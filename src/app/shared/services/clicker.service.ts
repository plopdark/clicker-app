import { Injectable } from '@angular/core';
import { RouterLinkEnum } from '../../utilities/enums/router-link.enum';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClickerService {
  public routerLinks = RouterLinkEnum;
  private clickCountSubject: Subject<number> = new Subject<number>();
  public clickCount: number = 0;

  public readonly icon = 'assets/images/default-person-icon.png';
  public readonly bot = 'assets/images/bot.png';
  public readonly click = 'assets/images/click.png';

  constructor() {
    const storedClicks = localStorage.getItem('clickCount');
    if (storedClicks) {
      this.clickCount = JSON.parse(storedClicks);
    }
  }

  public increaseClicks(): void {
    this.clickCount++;
    this.clickCountSubject.next(this.clickCount);
    localStorage.setItem('clickCount', JSON.stringify(this.clickCount));
  }

  public getClickCount(): Observable<number> {
    return this.clickCountSubject.asObservable();
  }
}
