import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ASM1';
  constructor() {}
  team: any;

  dataTeam($event: any) {
    this.team = $event.team;
    // console.log(this.team);
  }
}
