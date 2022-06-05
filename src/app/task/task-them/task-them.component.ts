import { Component, OnInit } from '@angular/core';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DuAnService } from 'src/app/service/du-an.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';
import { TaskService } from 'src/app/service/task.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

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

  frm1!: FormGroup;

  listDuAn: DuAn[] = [];
  listNhanVien: NhanVien[] = [];
  allTask: any;

  ngOnInit(): void {
    this.DuAnService.getData().subscribe((data: any) => {
      this.listDuAn = data;
    });
    this.NhanVienService.getData().subscribe((data: any) => {
      this.listNhanVien = data;
    });
    this.TaskService.getData().subscribe((data: any) => {
      this.allTask = data;
    });
    this.frm1 = new FormGroup({
      taskName: new FormControl('Dự Án ABC', [
        Validators.minLength(4),
        Validators.required,
      ]),
      taskDescription: new FormControl('', [
        Validators.minLength(10),
        Validators.required,
      ]),
      taskProject: new FormControl('1', Validators.required),
      taskOwner: new FormControl('1', Validators.required),
      taskPriority: new FormControl('1', Validators.required),
      taskStatus: new FormControl('1', Validators.required),
    });
    console.log(this.frm1);
  }

  xuly(data: any) {
    data = {
      id: this.allTask[this.allTask.length - 1].id + 1,
      tenTask: data.taskName,
      duAnID: data.taskProject,
      nhanvienID: data.taskOwner,
      moTa: data.taskDescription,
      status: data.taskStatus,
      priority: data.taskPriority,
    };
    this.TaskService.addItem(data);
    alert('Thêm task thành công');
  }
}
