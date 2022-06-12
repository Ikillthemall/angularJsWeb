import { User } from '../../user';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    userName: any;
    userPass: any;
    userPhone: any;
    userEmail: any;
    userAddress: any;
  constructor(

  ) { }
  listAuth: User[] = []

  ngOnInit(): void {
  }

}
