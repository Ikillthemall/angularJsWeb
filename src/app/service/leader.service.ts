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

  constructor() {}

  getAll() {
    return this.list;
  }

  getOne(id: number) {
    return this.list.find((currentValue) => currentValue.id == id);
  }

  addItem(item: Leader = <Leader>{}) {
    this.list.push(item);
  }

  editItem(item: Leader = <Leader>{}) {
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
