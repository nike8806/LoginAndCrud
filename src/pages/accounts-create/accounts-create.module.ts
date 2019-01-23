import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountsCreatePage } from './accounts-create';

@NgModule({
  declarations: [
    AccountsCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(AccountsCreatePage),
  ],
})
export class AccountsCreatePageModule {}
