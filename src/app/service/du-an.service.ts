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
      tenDuAn: 'Website Khởi nghiệp blockchain',
      ngayStart: '2022-03-01',
      tien: 200000000,
      leader: 1,
      thanhvien: [1, 3, 4],
    },
    {
      id: 2,
      tenDuAn: 'Website đào tạo FE',
      ngayStart: '2022-05-04',
      tien: 100500000,
      leader: 1,
      thanhvien: [1, 2, 4],
    },
    {
      id: 3,
      tenDuAn: 'Tiệm cà phê hoàng tử',
      ngayStart: '2022-05-15',
      tien: 45000000,
      leader: 2,
      thanhvien: [2, 3,  4],
    },
    {
      id: 4,
      tenDuAn: 'Quán A Hoàng tửu quán',
      ngayStart: '2022-04-21',
      tien: 28800000,
      leader: 2,
      thanhvien: [1, 2, 4],
    },
  ];

  private url = 'http://localhost:3000/duAn';

  constructor(private http: HttpClient) {}

  getAll() {
    console.log(this.list);
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
