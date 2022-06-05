import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { NhanVien } from 'src/app/nhan-vien';
import { DataService } from 'src/app/service/data.service';
import { DuAnService } from 'src/app/service/du-an.service';
import { NhanVienService } from 'src/app/service/nhan-vien.service';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  listTask: Task[] = [];
  listNV: NhanVien[] = [];
  listDuAn: DuAn[] = [];

  constructor(
    private TaskService: TaskService,
    private NhanVienService: NhanVienService,
    private DuAnService: DuAnService,
    private DataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    console.log(111);

    this.TaskService.getData().subscribe((data: any) => {
      this.listTask = data;
    });
    this.NhanVienService.getData().subscribe((data: any) => {
      this.listNV = data;
    });
    this.DuAnService.getData().subscribe((data: any) => {
      this.listDuAn = data;
    });
  }

  editTask(task: any) {
    this.DataService.sendData(task);
    this.router.navigate([`/taskSua/${task.id}`]);
  }

  deleteTask(id: number) {
    confirm('Bạn có chắc chắn muốn xóa task này không ?') &&
      this.TaskService.deleteItem(id);
    setTimeout(() => {
      this.getData();
    }, 500);
  }
}
