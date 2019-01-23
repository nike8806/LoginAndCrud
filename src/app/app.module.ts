import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';
import { UserLoginPage } from '../pages/user-login/user-login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { AccountsProvider } from '../providers/accounts';
import { UserAccessProvider } from '../providers/user-access/user-access';
import { CatalogsProvider } from '../providers/catalogs/catalogs';


@NgModule({
  declarations: [
    MyApp,
    UserLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FlexLayoutModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AccountsProvider,
    UserAccessProvider,
    CatalogsProvider
  ]
})
export class AppModule {}
