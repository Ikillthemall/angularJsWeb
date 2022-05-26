import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnChanges {
  constructor() {}
  team: any = 10;

  ngOnChanges(): void {
    console.log(123);
  }

  dataTeam($event: any) {
    this.team = $event;
    console.log($event);
  }
}
