import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AccountsProvider } from '../../providers/accounts'
import { CatalogsProvider } from '../../providers/catalogs'

@IonicPage()
@Component({
  selector: 'page-accounts-list',
  templateUrl: 'accounts-list.html',
})
export class AccountsListPage {
  accounts: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public accountsProvider: AccountsProvider,
    public catalogsProvider: CatalogsProvider,
    private _loadingCtrl: LoadingController,
  ) {  }

  ionViewDidLoad() {
    const loading = this._loadingCtrl.create();
    // todo create an adapter what decide if go to redirect if is not logged
    this.accountsProvider.getAccounts()
      .finally(() => loading.dismiss())
      .subscribe((response: any) => {
        this.accounts = response || [];
      }, (err) => { 
        // TODO implement error UX
        console.log(err); 
      });
  }
  /*
  Creating account to consume in cascade
  */
  createAccount() {
    const loading = this._loadingCtrl.create();
    // todo create an adapter what decide if go to redirect if is not logged
    this.catalogsProvider.getCards()
      .finally(() => loading.dismiss())
      .flatMap((res) => this.accountsProvider.createAccount(res.response))
      .subscribe((response: any) => {
       console.log(response);
      }, (err) => { 
        // TODO implement error UX
        console.log(err); 
      });
  }

}
