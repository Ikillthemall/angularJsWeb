import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuanChiTietComponent } from './duAn/duan-chi-tiet/duan-chi-tiet.component';
import { DuanListComponent } from './duAn/duan-list/duan-list.component';
import { DuanSuaComponent } from './duAn/duan-sua/duan-sua.component';
import { DuanThemComponent } from './duAn/duan-them/duan-them.component';
import { NvListComponent } from './nhanVien/nv-list/nv-list.component';
import { NvSuaComponent } from './nhanVien/nv-sua/nv-sua.component';
import { NvThemComponent } from './nhanVien/nv-them/nv-them.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskSuaComponent } from './task/task-sua/task-sua.component';
import { TaskThemComponent } from './task/task-them/task-them.component';

const routes: Routes = [
  { path: 'duanList', component: DuanListComponent },
  { path: 'duanThem', component: DuanThemComponent },
  { path: 'duanSua/:id', component: DuanSuaComponent },
  { path: 'duan/:id', component: DuanChiTietComponent },
  { path: 'taskList', component: TaskListComponent },
  { path: 'taskThem', component: TaskThemComponent },
  { path: 'taskSua/:id', component: TaskSuaComponent },
  { path: 'nvList', component: NvListComponent },
  { path: 'nvThem', component: NvThemComponent },
  { path: 'nvSua/:id', component: NvSuaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
