import { Component, OnInit } from '@angular/core';
import { DuAn } from 'src/app/du-an';
import { DuAnService } from 'src/app/service/du-an.service';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.scss'],
})
export class DuanListComponent implements OnInit {
  listDuAn: DuAn[] = [];

  constructor(private DuAnService: DuAnService) {}

  ngOnInit(): void {
    this.listDuAn = this.DuAnService.getAll();
  }
}
