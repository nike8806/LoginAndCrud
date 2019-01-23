import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserAccessProvider } from '../user-access'

// TODO move to config file
const host = 'https://mighty-refuge-81707.herokuapp.com/api/';
const endpoints = {
  createUser: 'auth/user/create',
  authenticateUser: 'auth/user/authenticate'
}

@Injectable()
export class UserProvider {

  constructor(
    private _http: HttpClient,
    private _userAccessProvider: UserAccessProvider 
  ) {
    console.log('Hello UserProvider Provider');
  }

  /**
  * Log in user
  */
  public login(email: string, password: string): Observable<any> {
    return this._http.post(
      `${host}${endpoints.authenticateUser}`,
      {
        email,
        password
      },
    ).map((res: any) => {
      this._userAccessProvider.token = res.token;
      console.log(res);
    }).catch((error: any) => {
      console.log(error);
      return Observable.throw(error);
    });
  }

  /**
  * Create in user
  */
 public create(firstname: string, lastname: string, email: string, password: string): Observable<any> {
  return this._http.post(
    `${host}${endpoints.createUser}`,
    {
      firstname,
      lastname,
      email,
      password
    },
  ).map((res: any) => {
    console.log(res);
  }).catch((error: any) => {
    console.error(error);
    return Observable.throw(error);
  });
}

}
