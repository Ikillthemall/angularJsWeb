import { Injectable } from '@angular/core';
import { NhanVien } from '../nhan-vien';

@Injectable({
  providedIn: 'root',
})
export class NhanVienService {
  list: NhanVien[] = [
    {
      id: 1,
      avt: 'https://br.atsit.in/vi/wp-content/uploads/2022/01/lieu-eren-co-chet-trong-attack-on-titan-season-4-part-2-episode-3.jpg',
      ho: 'Jeager',
      ten: 'Eren',
      ngaysinh: '1333-2-3',
      phai: true,
      khuvuc: 'Quận Shiganshina',
    },
    {
      id: 2,
      avt: 'https://w0.peakpx.com/wallpaper/642/316/HD-wallpaper-mikasa-anime-attack-on-titan-shingeki-no-kyojin-snk.jpg',
      ho: 'Ackerman',
      ten: 'Mikasa',
      ngaysinh: '1332-8-19',
      phai: false,
      khuvuc: 'Nữ',
    },
    {
      id: 3,
      avt: 'http://streaming1.danviet.vn/upload/2-2020/images/2020-04-24/Kiem-hiep-Kim-Dung-Cao-thu-so-mot-cua-ho-Mo-Dung-tu-sang-tao-ra-tuyet-hoc-khong-thua-kem-gi-doc-Co-C-1058-1587743855-width500height375.jpg',
      ho: 'Mộ',
      ten: 'Dung',
      ngaysinh: '1356-5-6',
      phai: true,
      khuvuc: 'Phía Nam',
    },
    {
      id: 4,
      avt: 'https://danviet.mediacdn.vn/upload/4-2019/images/2019-10-10/Khong-phai-Hang-long-thap-bat-chuong-day-moi-la-tuyet-hoc-giup-Tieu-Phong-ap-che-quan-hung-tai-Tu-Hi-271-1570721305-width576height313.jpg',
      ho: 'Kiều',
      ten: 'Phong',
      ngaysinh: '1352-6-2',
      phai: true,
      khuvuc: 'Phía Bắc',
    },
  ];

  constructor() {}

  getAll() {
    return this.list;
  }

  getOne(id: number) {
    return this.list.find((currentValue) => currentValue.id == id);
  }

  addItem(item: NhanVien = <NhanVien>{}) {
    this.list.push(item);
  }

  editItem(item: NhanVien = <NhanVien>{}) {
    let index = this.list.findIndex(
      (currentValue) => currentValue.id == item.id
    );
    this.list[index] = item;
  }

  deleteItem(id: number = 0) {
    let index = this.list.findIndex((currentValue) => {
      return currentValue.id == id;
    });
    console.log(index);
    this.list.splice(index, 1);
  }
}
