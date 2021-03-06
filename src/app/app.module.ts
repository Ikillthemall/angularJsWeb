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
import { DuanChiTietComponent } from './duAn/duan-chi-tiet/duan-chi-tiet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './user/register/register.component';
import { Moment } from 'moment';
import * as moment from 'moment';
import { ChangePassComponent } from './change-pass/change-pass.component';

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
    LoginComponent,
    RegisterComponent,
    ChangePassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
