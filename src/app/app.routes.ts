import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AccountComponent } from './pages/account/account.component';
import { TopListComponent } from './pages/top-list/top-list.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RoutingEnum } from './utilities/enums/routing.enum';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: RoutingEnum.Account, component: AccountComponent },
  { path: RoutingEnum.TopList, component: TopListComponent },
  { path: RoutingEnum.Shop, component: ShopComponent },
];
