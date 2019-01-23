import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserAccessProvider {

  constructor(public http: HttpClient) {  }

  private _token;
  /**
   * Function to update the token
   */
  set token(token) {
    // todo validate the Token deletion
    this._token = token
  }

  get token() {
    // todo validate the Token deletion
    return this._token;
  }

}
