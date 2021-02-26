import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionSelectionComponent } from './institution-selection/institution-selection.component';
import { FormsModule } from '@angular/forms';
import { ConsentComponent } from './consent/consent.component';
import { UtilityShellComponent } from './utility-shell/utility-shell.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ConnectionSuccessComponent } from './connection-success/connection-success.component';
import { ConnectionFailureComponent } from './connection-failure/connection-failure.component';
import { StartComponent } from './start/start.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { RevokeModalComponent } from './revoke-modal/revoke-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutionSelectionComponent,
    ConsentComponent,
    UtilityShellComponent,
    ConnectionSuccessComponent,
    ConnectionFailureComponent,
    StartComponent,
    TransactionsComponent,
    AccountsComponent,
    RevokeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConsentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
