import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.scss'],
})
export class NvSuaComponent implements OnInit {
  constructor(
    private DataService: DataService,
    private NhanVienService: NhanVienService
  ) {}

  staffFirstName: any;
  staffAvatar: any;
  staffLastName: any;
  staffBirth: any;
  staffGender: any;
  staffArea: any;

  nv: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.nv = this.DataService.getData();
    this.staffFirstName = this.nv.ho;
    this.staffAvatar = this.nv.avt;
    this.staffLastName = this.nv.ten;
    this.staffBirth = this.nv.ngaysinh;
    this.staffGender = this.nv.phai;
    this.staffArea = this.nv.khuvuc;
  }

  xuly(data: any) {
    console.log(data);
    data = {
      id: parseInt(this.nv.id),
      avt: data.staffAvatar,
      ho: data.staffFirstName,
      ten: data.staffLastName,
      ngaysinh: data.staffBirth,
      phai: data.staffGender,
      khuvuc: data.staffArea,
    };

    this.NhanVienService.editItem(data);
    alert('Sửa nhân viên thành công');
  }
}
