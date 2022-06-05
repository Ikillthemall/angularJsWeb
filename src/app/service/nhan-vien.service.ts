import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NhanVien } from '../nhan-vien';

@Injectable({
  providedIn: 'root',
})
export class NhanVienService {
  list: NhanVien[] = [
    {
      id: 1,
      avt: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/16344830_1458999190798524_1851726792633614336_n.png?stp=dst-png_s168x128&_nc_cat=1&ccb=1-7&_nc_sid=0572db&_nc_ohc=7dXE6x9zLlMAX87Or7V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT_Kd_irJ6-OA5wJjx1YDQX7RRg64W2EhsNy_WpsEbuDaA&oe=628BB4D5',
      ho: 'Nguyễn Bá',
      ten: 'Đạo',
      ngaysinh: '2001-1-3',
      phai: true,
      khuvuc: 'Bắc',
    },
    {
      id: 2,
      avt: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/16686112_1458993794132397_5069039369038331904_n.png?stp=dst-png_s168x128&_nc_cat=1&ccb=1-7&_nc_sid=0572db&_nc_ohc=WqPStJ8EDQgAX_i-a9W&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT9nyHcwg1alhrECJU118sZoM_lOQVWG2Je4X3AGtpdlxA&oe=628BC8FB',
      ho: 'Phạm Kỳ',
      ten: 'Luật',
      ngaysinh: '2001-5-6',
      phai: true,
      khuvuc: 'Bắc',
    },
    {
      id: 3,
      avt: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/70177190_2397096100376464_6529421781181136896_n.png?stp=dst-png_s168x128&_nc_cat=1&ccb=1-7&_nc_sid=0572db&_nc_ohc=2LLpK1npJEUAX-AWUf9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT-VXpEptDmbigAFHa9gms2RYYDvsGqi8AOsvKdy3xfqrw&oe=628A5C73',
      ho: 'Mai Thanh',
      ten: 'Toán',
      ngaysinh: '2002-6-15',
      phai: true,
      khuvuc: 'Nam',
    },
    {
      id: 4,
      avt: 'https://scr.vn/wp-content/uploads/2020/07/H%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-%C4%91%E1%BA%B9p-1.jpg',
      ho: 'Cao Thị Chót',
      ten: 'Vót',
      ngaysinh: '2002-8-19',
      phai: false,
      khuvuc: 'Nam',
    },
    {
      id: 5,
      avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUTzPmToeXINLPent4vxqBqEfSgO-k8adI9OkpmfR-2FEajD5tbBpMyHjVPnkQ_gnyeM&usqp=CAU',
      ho: 'Mai Phạt Sáu',
      ten: 'Ngàn',
      ngaysinh: '2001-2-28',
      phai: false,
      khuvuc: 'Trung',
    },
  ];

  private url = 'http://localhost:3000/nhanVien';

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

  addItem(item: NhanVien = <NhanVien>{}) {
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

  editItem(item: NhanVien = <NhanVien>{}) {
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
    return this.http
      .delete(`${this.url}/${id}`)
      .subscribe(() => console.log('Deleted'));

    // let index = this.list.findIndex((currentValue) => {
    //   return currentValue.id == id;
    // });
    // console.log(index);
    // this.list.splice(index, 1);
  }
}
