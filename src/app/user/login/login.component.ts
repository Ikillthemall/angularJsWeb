import { User } from '../../user';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment  from 'moment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    // userName: any;
    // userPass: any;
  constructor(
    private user: UserService,
    private router: Router,
  ) { }
  // listAuth: User[] = []

  ngOnInit(): void {
  }

  // handleData(data:any){
  //   this.user.login( data.un, data.pw).subscribe( ()=>{ 
  //        console.log("Đăng nhập thành công");
  //        this.router.navigateByUrl('/');
  //     }
  //   )
  // }

  handleNewData(data: any) {
    console.log(data, data.un , data.pw);
    this.user.login( data.un, data.pw).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          console.log("Đăng nhập thành công ", res);          
          const expiresAt = moment().add(d.expiresIn,'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
           this.router.navigateByUrl('/');
      },
      error => {
        console.log('You are not allowed to access this page', error);
        this.router.navigateByUrl('/userLogin');
      }
    )
   }

}
