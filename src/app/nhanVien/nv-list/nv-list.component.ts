import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/nhan-vien';
import { NhanVienService } from 'src/app/service/nhan-vien.service';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.scss'],
})
export class NvListComponent implements OnInit {
  listNhanVien: NhanVien[] = [];

  constructor(private NhanVienService: NhanVienService) {}

  ngOnInit(): void {
    this.listNhanVien = this.NhanVienService.getAll();
  }
}
