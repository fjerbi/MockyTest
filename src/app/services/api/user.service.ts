/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  base_url: string;
  constructor(public http: HttpClient) {
    console.log('Hello RepVertApiService Provider');
    this.base_url =
      'https://run.mocky.io/v3/484607a5-cd8e-4909-b73a-ac123e437b89';
  }

  fetchAllUsers() {
    return this.http.get(this.base_url);
  }

  //API doesn't exist in mocky, passing data through params, or passing params through modal
  fetchSingleUser(id: any) {
    return this.http.get(this.base_url + '/' + id);
  }
}
