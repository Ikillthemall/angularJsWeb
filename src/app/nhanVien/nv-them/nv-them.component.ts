import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/nhan-vien';
import { DuAnService } from 'src/app/service/du-an.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.scss'],
})
export class NvThemComponent implements OnInit {
  constructor(private NhanVienService: NhanVienService) {}

  staffFirstName: any;
  staffAvatar: any;
  staffLastName: any;
  staffBirth: any;
  staffGender: any;
  staffArea: any;

  allNhanVien: any;

  ngOnInit() {
    this.NhanVienService.getData().subscribe((data: any) => {
      this.allNhanVien = data;
    });
  }

  xuly(data: any) {
    data = {
      id: parseInt(this.allNhanVien[this.allNhanVien.length - 1].id) + 1,
      avt: this.staffAvatar,
      ho: this.staffFirstName,
      ten: this.staffLastName,
      ngaysinh: this.staffBirth,
      phai: this.staffGender === 'true' ? true : false,
      khuvuc: this.staffArea,
    };
    this.NhanVienService.addItem(data);
    alert('Thêm nhân viên thành công');
  }
}
