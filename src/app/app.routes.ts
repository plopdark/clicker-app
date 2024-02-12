import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AccountComponent } from './pages/account/account.component';
import { TopListComponent } from './pages/top-list/top-list.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'account', component: AccountComponent },
  { path: 'top-list', component: TopListComponent },
];
