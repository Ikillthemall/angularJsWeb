import { Component, OnInit } from '@angular/core';
import { Leader } from 'src/app/leader';
import { NhanVien } from 'src/app/nhan-vien';
import { DuAnService } from 'src/app/service/du-an.service';
import { LeaderService } from 'src/app/service/leader.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.scss'],
})
export class DuanThemComponent implements OnInit {
  proName: any;
  proInitialDate: any;
  proPrice: any;
  proLeader: any;
  proMember: any;
  constructor(
    private LeaderService: LeaderService,
    private NhanVienService: NhanVienService,
    private DuAnService: DuAnService
  ) {}

  listLeader: Leader[] = [];
  listNhanVien: NhanVien[] = [];
  projects: any;
  ngOnInit(): void {
    this.LeaderService.getData().subscribe(
      (response: any) => {
        this.listLeader = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.NhanVienService.getData().subscribe(
      (response: any) => {
        this.listNhanVien = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.DuAnService.getData().subscribe(
      (response: any) => {
        this.projects = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  handleData(data: any) {
    // let projects = this.DuAnService.getAll();
    data = {
      id: parseInt(this.projects[this.projects.length - 1].id) + 1,
      tenDuAn: this.proName,
      ngayStart: this.proInitialDate,
      tien: parseInt(this.proPrice),
      leader: this.proLeader,
      thanhvien: this.proMember,
    };
    console.log('Data: ', data);
    if((this.proName && this.proInitialDate && this.proPrice && this.proLeader && this.proMember) !== undefined) {
      this.DuAnService.addItem(data);
      setTimeout(() => { 
        alert('Thêm dự án thành công');
      }, 1000);
    }else {
      setTimeout(() => {
        alert("Thêm thất bại");
      }, 1000);
    }
  }
}
