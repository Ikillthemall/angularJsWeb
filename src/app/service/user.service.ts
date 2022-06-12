import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list: User[] = [
    {
      id: 1,
      userName: "LeTrung3000",
      userPass: "12345",
      userEmail: "letrung10091011@gmail.com",
      userPhone: "0987294422",
      userAddress: "HCM",
    }
  ];
  private url = 'http://localhost:3000/user';
  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.list;
  }

  getData() {
    return this.http.get(this.url);
  }

  userReg(item: User = <User>{}) {
    const params = new HttpParams({
      fromObject: {...item},
    });

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.http.post(this.url, params, { headers }).subscribe((data) => {
      // console.log(data);
    });
    // this.list.push(item);
  }
}
