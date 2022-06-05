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
  projectName: any;
  projectDate: any;
  projectPrice: any;
  projectLeader: any;
  projectMember: any;
  constructor(
    private LeaderService: LeaderService,
    private NhanVienService: NhanVienService,
    private DuAnService: DuAnService
  ) {}

  listLeader: Leader[] = [];
  listNhanVien: NhanVien[] = [];
  allProject: any;
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
        this.allProject = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  xuly(data: any) {
    // let allProject = this.DuAnService.getAll();
    data = {
      id: parseInt(this.allProject[this.allProject.length - 1].id) + 1,
      tenDuAn: this.projectName,
      ngayStart: this.projectDate,
      tien: parseInt(this.projectPrice),
      leader: this.projectLeader,
      thanhvien: this.projectMember,
    };
    console.log('Data: ', data);
    this.DuAnService.addItem(data);
    alert('Thêm dự án thành công');
  }
}
