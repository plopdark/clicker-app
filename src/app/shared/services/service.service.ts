import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public readonly icon = '../../../assets/images/default-person-icon.png';

  constructor() {}
}
