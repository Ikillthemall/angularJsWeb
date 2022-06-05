import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanVien } from '../nhan-vien';
import { DuAnService } from '../service/du-an.service';
import { NhanVienService } from '../service/nhan-vien.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss'],
})
export class LeaderComponent implements OnInit, OnChanges {
  constructor(
    private DuAnService: DuAnService,
    private NhanVienService: NhanVienService,
    private TaskService: TaskService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  listNv: NhanVien[] = [];
  @Input() totalPrice: any = 0;
  @Input() totalTask: any = 0;

  nFormatter(num: number) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnChanges(): void {
    this.getData();
  }

  getData() {
    this.NhanVienService.getData().subscribe((item: any) => {
      this.listNv = item;
    });
    this.DuAnService.getData().subscribe((data: any) => {
      data.forEach((_item: any) => {
        this.totalPrice = this.totalPrice + parseInt(_item.tien);
      });
      this.totalPrice = this.nFormatter(this.totalPrice);
    });
    this.TaskService.getData().subscribe((data: any) => {
      this.totalTask = data.length;
    });
  }
}
