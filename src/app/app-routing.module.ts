import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { StartComponent } from './start/start.component';
import { ConnectionFailureComponent } from './connection-failure/connection-failure.component';
import { ConnectionSuccessComponent } from './connection-success/connection-success.component';
import { InstitutionSelectionComponent } from './institution-selection/institution-selection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },

  {
    path: 'connect',
    component: InstitutionSelectionComponent,
  },
  {
    path: 'success',
    component: ConnectionSuccessComponent,
  },
  {
    path: 'failure',
    component: ConnectionFailureComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
