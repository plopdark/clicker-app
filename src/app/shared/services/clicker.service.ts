import { Injectable } from '@angular/core';
import { RouterLinkEnum } from '../../utilities/enums/router-link.enum';

@Injectable({
  providedIn: 'root',
})
export class ClickerService {
  public readonly icon = 'assets/images/default-person-icon.png';
  public readonly bot = 'assets/images/bot.png';
  public readonly click = 'assets/images/click.png';
  public routerLinks = RouterLinkEnum;

  constructor() {}
}
