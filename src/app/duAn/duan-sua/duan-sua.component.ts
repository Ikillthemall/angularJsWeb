import { Component, OnInit } from '@angular/core';
import { Leader } from 'src/app/leader';
import { NhanVien } from 'src/app/nhan-vien';
import { DataService } from 'src/app/service/data.service';
import { DuAnService } from 'src/app/service/du-an.service';
import { LeaderService } from 'src/app/service/leader.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.scss'],
})
export class DuanSuaComponent implements OnInit {
  projectName: any;
  projectDate: any;
  projectPrice: any;
  projectLeader: any;
  projectMember: any;

  project: any;

  listLeader: Leader[] = [];
  listNhanVien: NhanVien[] = [];

  constructor(
    private LeaderService: LeaderService,
    private NhanVienService: NhanVienService,
    private DuAnService: DuAnService,
    private DataService: DataService
  ) {}

  ngOnInit(): void {
    this.listLeader = this.LeaderService.getAll();
    // this.listNhanVien = this.NhanVienService.getAll();
    this.NhanVienService.getData().subscribe((data: any) => {
      this.listNhanVien = data.map((item: any) => {
        return {
          ...item,
          id: parseInt(item.id),
        };
      });
    });
    this.project = this.DataService.getData();
    this.projectName = this.project.tenDuAn;
    this.projectDate = this.project.ngayStart;
    this.projectPrice = this.project.tien;
    this.projectLeader = this.project.leader;
    this.projectMember = this.project.thanhvien.map((item: any) =>
      parseInt(item)
    );
  }

  xuly(data: any) {
    data = {
      id: parseInt(this.project.id),
      tenDuAn: data.projectName,
      ngayStart: data.projectDate,
      tien: data.projectPrice,
      leader: data.projectLeader,
      thanhvien: data.projectMember,
    };

    this.DuAnService.editItem(data);
    alert('Sửa dự án thành công');
  }
}
