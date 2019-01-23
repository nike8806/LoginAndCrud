import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserAccessProvider } from  '../user-access'
// TODO move to config file
const host = 'https://mighty-refuge-81707.herokuapp.com/api/';
const endpoints = {
  accounts: 'accounts',
}

@Injectable()
export class AccountsProvider {

  constructor(
    private _http: HttpClient,
    private _userAccessProvider: UserAccessProvider
  ) {
  }


  /**
  * List accounts
  */
  public getAccounts(): Observable<any> {
    return this._http.get(
      `${host}${endpoints.accounts}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-access-token': this._userAccessProvider.token
        }
      }
    ).map((res: any) => {
      console.log(res);
    }).catch((error: any) => {
      console.error(error);
      return Observable.throw(error);
    });
  }

  /**
  * Create account
  */
 public createAccount(cards): Observable<any> {
  return this._http.post(
    `${host}${endpoints.accounts}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-access-token': this._userAccessProvider.token
      }
    }
  ).map((res: any) => {
    console.log(res);
  }).catch((error: any) => {
    console.error(error);
    return Observable.throw(error);
  });
}

}
