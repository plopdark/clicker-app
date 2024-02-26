import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-items',
  standalone: true,
  imports: [],
  templateUrl: './shop-items.component.html',
  styleUrl: './shop-items.component.scss',
})
export class ShopItemsComponent {
  @Input() title: string = '';
  @Input() info: string = '';
}
