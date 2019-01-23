
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserAccessProvider } from  '../user-access'
// TODO move to config file
const host = 'https://mighty-refuge-81707.herokuapp.com/api/catalogs/';
const endpoints = {
  cards: 'cards',
}

/*
  Generated class for the CatalogsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CatalogsProvider {
  constructor(
    private _http: HttpClient,
    private _userAccessProvider: UserAccessProvider
  ) {
  }


  /**
  * Create in user
  */
  public getCards(): Observable<any> {
    return this._http.get(
      `${host}${endpoints.cards}`,
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