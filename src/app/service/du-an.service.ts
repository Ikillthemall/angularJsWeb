import { Injectable } from '@angular/core';
import { DuAn } from '../du-an';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DuAnService {
  list: DuAn[] = [
    {
      id: 1,
      tenDuAn: 'Quản lý trại heo',
      ngayStart: '2022-03-01',
      tien: 67000000,
      leader: 1,
      thanhvien: [1, 3, 4],
    },
    {
      id: 2,
      tenDuAn: 'Cây xanh công viên',
      ngayStart: '2022-04-02',
      tien: 98500000,
      leader: 1,
      thanhvien: [1, 3, 4],
    },
    {
      id: 3,
      tenDuAn: 'Website Văn hóa Việt',
      ngayStart: '2022-04-15',
      tien: 35000000,
      leader: 2,
      thanhvien: [2, 4],
    },
    {
      id: 4,
      tenDuAn: 'Website Du lịch Bụi',
      ngayStart: '2022-04-21',
      tien: 77500000,
      leader: 2,
      thanhvien: [2, 4],
    },
    {
      id: 5,
      tenDuAn: 'Quản lý nhà thuốc Vĩnh An',
      ngayStart: '2022-05-02',
      tien: 97000000,
      leader: 3,
      thanhvien: [4, 5],
    },
    {
      id: 6,
      tenDuAn: 'Chăm sóc thú cưng',
      ngayStart: '2022-02-11',
      tien: 180000000,
      leader: 3,
      thanhvien: [3, 4],
    },
  ];

  private url = 'http://localhost:3000/duAn';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.list;
  }

  getData() {
    return this.http.get(this.url);
  }

  getOne(id: number) {
    // return this.list.find((currentValue) => currentValue.id == id);
    return this.http.get(`${this.url}/${id}`);
  }

  addItem(item: DuAn = <DuAn>{}) {
    const params = new HttpParams({
      fromObject: { ...item },
    });

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.url, params, { headers }).subscribe((data) => {
      // console.log(data);
    });
    // this.list.push(item);
  }

  editItem(item: DuAn = <DuAn>{}) {
    const params = new HttpParams({
      fromObject: { ...item },
    });

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http
      .put(`${this.url}/${item.id}`, params, { headers })
      .subscribe((data) => {
        // console.log(data);
      });

    // let index = this.list.findIndex(
    //   (currentValue) => currentValue.id == item.id
    // );
    // this.list[index] = item;
  }

  deleteItem(id: number = 0) {
    return this.http.delete(`${this.url}/${id}`).subscribe((data) => {
      console.log(data);
    });
    // let index = this.list.findIndex((currentValue) => {
    //   return currentValue.id == id;
    // });
    // console.log(index);
    // this.list.splice(index, 1);
  }
}
