import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AccountComponent } from './pages/account/account.component';
import { TopListComponent } from './pages/top-list/top-list.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RoutingEnum } from './utilities/enums/routing.enum';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: RoutingEnum.Main, component: MainComponent },
  { path: RoutingEnum.Account, component: AccountComponent },
  { path: RoutingEnum.TopList, component: TopListComponent },
  { path: RoutingEnum.Shop, component: ShopComponent },
  { path: RoutingEnum.Auth, component: AuthComponent },
];
