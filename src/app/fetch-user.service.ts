import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from "rxjs/observable/forkJoin";
import { Observable } from "rxjs";

@Injectable()
export class FetchUserService {

  public headers;
  public randomUserUrl: string = "https://randomuser.me/api/?results=";
  constructor(private _http: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json'); 
  }
   getUsers(amount: number):Observable<any> {
     return this._http.get(this.randomUserUrl + amount, this.headers);
   }
}
