import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leader } from '../leader';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  list: Leader[] = [
    {
      id: 1,
      avt: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.1997-6/851575_392310047532974_678875671_n.png?stp=dst-png_s168x128&_nc_cat=1&ccb=1-7&_nc_sid=0572db&_nc_ohc=jpx0PpoHg4sAX9rGFaH&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT9wzfkTSHSD_dGZufms4sspKMSN4IU_o8nJ5XDF-2z2zA&oe=628C450D',
      ho: 'Lê',
      ten: 'Trung',
      ngaysinh: '2001-11-15',
      phai: true,
    },
  ];

  private url = 'http://localhost:3000/leader';

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

  addItem(item: Leader = <Leader>{}) {
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

  editItem(item: Leader = <Leader>{}) {
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
