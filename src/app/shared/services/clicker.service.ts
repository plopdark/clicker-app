import { Injectable, OnInit } from '@angular/core';
import { RouterLinkEnum } from '../../utilities/enums/router-link.enum';
import { Observable, Subject } from 'rxjs';
import { Level } from '../../utilities/const/level.const';

@Injectable({
  providedIn: 'root',
})
export class ClickerService implements OnInit {
  public routerLinks = RouterLinkEnum;
  private clickCountSubject: Subject<number> = new Subject<number>();
  public level = Level;
  public maxLevel = this.level.length;
  public cost = this.level.find((item) => item.cost);
  public autoClicker: ReturnType<typeof setInterval> | undefined;
  public autoClickerActive: boolean = true;

  public user = {
    clickCount: 0,
    perClick: 1,
    level: 1,
  };

  public readonly icon = 'assets/images/default-person-icon.png';
  public readonly bot = 'assets/images/bot.png';
  public readonly click = 'assets/images/click.png';

  constructor() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }

    if (localStorage.getItem('autoClickerActive') === 'true') {
      this.autoClicking();
    }
  }

  ngOnInit(): void {
    this.user.clickCount;
  }

  public increaseClicks(): void {
    this.user.clickCount += this.user.perClick;
    this.clickCountSubject.next(this.user.clickCount);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  public getClickCount(): Observable<number> {
    return this.clickCountSubject.asObservable();
  }

  public increaseLevel(): boolean {
    const nextLevel = this.level.find(
      (item) => item.level === this.user.perClick + 1
    );
    if (nextLevel)
      if (nextLevel && this.user.clickCount >= nextLevel.cost) {
        this.user.clickCount -= nextLevel.cost;
        this.user.perClick = nextLevel.level;
        this.user.level = nextLevel.level;
        localStorage.setItem('user', JSON.stringify(this.user));
        return true;
      }
    return false;
  }

  public autoClicking() {
    this.autoClicker = setInterval(() => {
      for (let i = 0; i < 1; i++) {
        this.increaseClicks();
      }
    }, 1000 / 1);
    localStorage.setItem('autoClickerActive', 'true');
  }

  public turnOffAutoClicker() {
    clearInterval(this.autoClicker);
    this.autoClickerActive = false;
    localStorage.removeItem('autoClickerActive');
  }

  public turnOnAutoClicker() {
    this.autoClicking();
    this.autoClickerActive = true;
  }
}
