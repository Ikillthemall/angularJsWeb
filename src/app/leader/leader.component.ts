import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { DuAnService } from '../service/du-an.service';
import { NhanVienService } from '../service/nhan-vien.service';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss'],
})
export class LeaderComponent implements OnInit {
  constructor(
    private DuAnService: DuAnService,
    private NhanVienService: NhanVienService
  ) {}

  listNv: NhanVien[] = [];
  totalPrice: any = 0;

  nFormatter(num: number) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, 'B');
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, 'K');
    }
    return num;
  }

  ngOnInit(): void {
    this.listNv = this.NhanVienService.getAll();
    let data = this.DuAnService.getAll();
    data.forEach((item) => {
      this.totalPrice = this.totalPrice + item.tien;
    });
    this.totalPrice = this.nFormatter(this.totalPrice);
  }
}
