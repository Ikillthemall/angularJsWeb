import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LeaderComponent } from './leader/leader.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { DuanThemComponent } from './duAn/duan-them/duan-them.component';
import { DuanSuaComponent } from './duAn/duan-sua/duan-sua.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskThemComponent } from './task/task-them/task-them.component';
import { TaskSuaComponent } from './task/task-sua/task-sua.component';
import { NvListComponent } from './nhanVien/nv-list/nv-list.component';
import { NvThemComponent } from './nhanVien/nv-them/nv-them.component';
import { NvSuaComponent } from './nhanVien/nv-sua/nv-sua.component';
import { DuanListComponent } from './duAn/duan-list/duan-list.component';
import { FormsModule } from '@angular/forms';
import { DuanChiTietComponent } from './duAn/duan-chi-tiet/duan-chi-tiet.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeaderComponent,
    ListMemberComponent,
    DuanListComponent,
    DuanThemComponent,
    DuanSuaComponent,
    TaskListComponent,
    TaskThemComponent,
    TaskSuaComponent,
    NvListComponent,
    NvThemComponent,
    NvSuaComponent,
    DuanChiTietComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
