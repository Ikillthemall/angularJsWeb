import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DataService } from 'src/app/service/data.service';
import { DuAnService } from 'src/app/service/du-an.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.scss'],
})
export class TaskSuaComponent implements OnInit {
  constructor(
    private DuAnService: DuAnService,
    private TaskService: TaskService,
    private NhanVienService: NhanVienService,
    private DataService: DataService
  ) {}

  listDuAn: DuAn[] = [];
  listNhanVien: NhanVien[] = [];
  task: any;

  frm1!: FormGroup;

  ngOnInit(): void {
    this.DuAnService.getData().subscribe((data: any) => {
      this.listDuAn = data;
    });
    this.NhanVienService.getData().subscribe((data: any) => {
      this.listNhanVien = data;
    });
    this.task = this.DataService.getData();
    // this.TaskService.getData().subscribe((data: any) => {
    //   this.task = data;
    // console.log(this.task);
    // });
    this.frm1 = new FormGroup({
      taskName: new FormControl(this.task.tenTask, [
        Validators.minLength(4),
        Validators.required,
      ]),
      taskDescription: new FormControl(this.task.moTa, [
        Validators.minLength(10),
        Validators.required,
      ]),
      taskProject: new FormControl(this.task.duAnID, Validators.required),
      taskOwner: new FormControl(this.task.nhanvienID, Validators.required),
      taskPriority: new FormControl(this.task.priority, Validators.required),
      taskStatus: new FormControl(this.task.status, Validators.required),
    });
  }

  xuly(data: any) {
    console.log(data);
    data = {
      id: parseInt(this.task.id),
      tenTask: data.taskName,
      duAnID: data.taskProject,
      nhanvienID: data.taskOwner,
      moTa: data.taskDescription,
      status: data.taskStatus,
      priority: data.taskPriority,
    };

    this.TaskService.editItem(data);
    alert('Sửa task thành công');
  }
}
