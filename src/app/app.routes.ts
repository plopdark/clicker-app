import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AccountComponent } from './pages/account/account.component';
import { TopListComponent } from './pages/top-list/top-list.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'account', component: AccountComponent },
  { path: 'top-list', component: TopListComponent },
  { path: 'shop', component: ShopComponent },
];
