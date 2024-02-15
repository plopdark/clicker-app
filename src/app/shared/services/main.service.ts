import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private clickCountSubject: Subject<number> = new Subject<number>();
  public clickCount: number = 0;

  constructor() {
    const storedClicks = localStorage.getItem('clickCount');
    if (storedClicks) {
      this.clickCount = parseInt(storedClicks);
    }
  }

  public increaseClicks(): void {
    this.clickCount++;
    this.clickCountSubject.next(this.clickCount);
    localStorage.setItem('clickCount', this.clickCount.toString());
  }

  public getClickCount(): Observable<number> {
    return this.clickCountSubject.asObservable();
  }
}
