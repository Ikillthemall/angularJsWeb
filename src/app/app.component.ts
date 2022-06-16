import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ASM1';
  constructor(
    private user: UserService
  ) {}
  team: any;

  dataTeam($event: any) {
    this.team = $event.team;
    // console.log(this.team);
  }

  isLogined() {
    return this.user.logged();
  }
  logout() {
    this.user.logout()
  }
}
