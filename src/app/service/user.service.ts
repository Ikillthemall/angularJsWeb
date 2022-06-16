import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import * as moment  from 'moment';

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

  login(username:string='', password:string=''){    
    const userInfo = { un:username, pw:password }
    const headers = new HttpHeaders().set('Content-Type', 'application/json') ;
    return this.http.post('http://localhost:5000/login'
    , JSON.stringify(userInfo) 
    , {headers:headers, responseType: 'text'}
  ) 
}
  logged () {
    const str = localStorage.getItem("expires_at") || "";
    if (str=="") return false; //chưa dn    
    const expiresAt = JSON.parse(str);    
    return moment().isBefore(moment(expiresAt));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');
    console.log('Thoát thành công');
  }
}
