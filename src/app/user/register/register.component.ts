import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    userName:any;
    userPass:any;
    userPhone:any;
    userEmail:any;
    userAddress:any;
  constructor(
    private UserService: UserService
  ) {}
  listUser: User [] = [];
  users: any;

  ngOnInit(): void {
      this.UserService.getData().subscribe(
        (res: any) => {
          this.users = res;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  handleData(data:any) {
    console.log(this.users);
    data = {
      id: parseInt(this.users[this.users.length - 1].id) + 1,
      userName: this.userName,
      userPass: this.userPass,
      userPhone: this.userPhone,
      userEmail: this.userEmail,
    };
    console.log('data: ', data);
    if((this.userName && this.userPass && this.userPhone && this.userEmail) !==undefined) {
      this.UserService.userReg(data);
      setTimeout(() => {
        alert('Đăng ký thành công!');
      }, 1000);
    }else {
      setTimeout(() => {
        alert('Đăng ký thất bại!');
      }, 1000);
    }
  }
}
