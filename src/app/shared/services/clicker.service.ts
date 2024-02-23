import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClickerService {
  public readonly icon = 'assets/images/default-person-icon.png';
  public readonly bot = 'assets/images/bot.png';
  public readonly click = 'assets/images/click.png';

  constructor() {}
}
