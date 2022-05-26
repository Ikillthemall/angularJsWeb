import { Component, OnInit } from '@angular/core';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DuAnService } from 'src/app/service/du-an.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.scss'],
})
export class TaskThemComponent implements OnInit {
  constructor(
    private DuAnService: DuAnService,
    private TaskService: TaskService,
    private NhanVienService: NhanVienService
  ) {}

  listDuAn: DuAn[] = [];
  listNhanVien: NhanVien[] = [];

  ngOnInit(): void {
    this.listDuAn = this.DuAnService.getAll();
    this.listNhanVien = this.NhanVienService.getAll();
  }
}
