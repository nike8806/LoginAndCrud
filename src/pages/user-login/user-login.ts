import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
// TODO create index page to make destructuring over the user module
import { UserProvider, UserInterface } from '../../providers/user';


@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    public toastCtrl: ToastController
  ) { }


  /**
   * Function to log in and redirect to accounts page
   * @param username email
   * @param password password to login
   */
  public login(username: string, password: string) {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.userProvider
      .login(username, password)
      .finally(() => loading.dismiss())
      .subscribe((response: any) => {
        this.presentToast(
          'success',
          'Welcome!',
          () => {
            this.navCtrl.setRoot('AccountsListPage');
          }
        );
        
      }, (err) => { this._loginHandleError(err); });
  }

  /**
   * Redirect to reset password
   */
  public signUp() {
    this.navCtrl.push('UserCreatePage');
  }

  /**
   * Function to show a toast
   * @param type type of error
   * @param message Message to show
   * @param actionCB Action to execute when the toast is closed
   */
  public presentToast(type: string, message: string, actionCB  = ()=>{}) {
    let toast = this.toastCtrl.create({
      message,
      showCloseButton: true,
      position: 'middle',
      duration: 3000
    });
  
    toast.onDidDismiss(actionCB);
    toast.present();
  }

  /*
   * Error Handler
   */
  private _loginHandleError(error: any) {
    console.log(error)
    const {
      error: {
        success,
        error: errorService
      }
    } = error;
    const errorMsg = success || errorService;
    // @TODO validate errors and choose the cases
    this.presentToast(
      'error',
      errorMsg
    );
  }
}
