import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UserProvider, UserInterface } from '../../providers/user';

@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    private toastCtrl: ToastController
  ) {
  }

  public createUser(firstname, lastname, email, password) {
    let loading = this._loadingCtrl.create();
    loading.present();

    this.userProvider
      .create(firstname, lastname, email, password)
      .finally(() => loading.dismiss())
      .subscribe((response: any) => {
        this.presentToast();
      }, (err) => { this._createHandleError(err); }); 
  }

  /**
   * Function to show a toast
   */
  public presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully, go to login page',
      showCloseButton: true,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      this.navCtrl.pop();
    });
  
    toast.present();
  }

  /*
   * Error Handler
   */
  private _createHandleError(error: any) {
    // TODO show toast or modal indicating the error
    console.error(error)
  }
}
