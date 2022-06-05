import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanVien } from 'src/app/nhan-vien';
import { DataService } from 'src/app/service/data.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.scss'],
})
export class NvListComponent implements OnInit {
  listNhanVien: NhanVien[] = [];

  constructor(
    private NhanVienService: NhanVienService,
    private DataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    console.log('Loading data');
    this.NhanVienService.getData().subscribe((data: any) => {
      data.map((_element: any) => {
        if (_element.phai == true || _element.phai == 'true') {
          _element.phai = true;
          // console.log(_element.ten + ' ' + _element.phai);
        } else {
          _element.phai = false;
        }
      });
      this.listNhanVien = data;
    });
  }

  editNV(nv: any) {
    this.DataService.sendData(nv);
    this.router.navigate([`nvSua/${nv.id}`]);
  }

  async deleteNV(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa nhân viên này không ?')) {
      this.NhanVienService.deleteItem(id);
      setTimeout(() => {
        this.getData();
      }, 500);
      // let myPromise = new Promise<void>((resolve, reject) => {
      //   this.NhanVienService.deleteItem(id);
      //   resolve();
      // });
      // myPromise
      //   .then(() => {
      //     console.log('Get data');
      //     this.getData();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  }
}
