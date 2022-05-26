import { Component, OnInit } from '@angular/core';
import { Leader } from 'src/app/leader';
import { NhanVien } from 'src/app/nhan-vien';
import { LeaderService } from 'src/app/service/leader.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.scss'],
})
export class DuanThemComponent implements OnInit {
  constructor(
    private LeaderService: LeaderService,
    private NhanVienService: NhanVienService
  ) {}

  listLeader: Leader[] = [];
  listNhanVien: NhanVien[] = [];

  ngOnInit(): void {
    this.listLeader = this.LeaderService.getAll();
    this.listNhanVien = this.NhanVienService.getAll();
  }
}
