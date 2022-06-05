import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { DataService } from 'src/app/service/data.service';
import { DuAnService } from 'src/app/service/du-an.service';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.scss'],
})
export class DuanListComponent implements OnInit {
  listDuAn: DuAn[] = [];

  constructor(
    private DuAnService: DuAnService,
    private DataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.DuAnService.getData().subscribe(
      (response: any) => {
        this.listDuAn = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  editDuAn(duan: any) {
    this.DataService.sendData(duan);
    this.router.navigate([`/duanSua/${duan.id}`]);
  }

  deleteDuAn(id: number) {
    confirm('Bạn có chắc chắn muốn xóa dự án này không ?') &&
      this.DuAnService.deleteItem(id);
    setTimeout(() => {
      this.getData();
    }, 500);
  }
}
