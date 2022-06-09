import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataService: any = '';

  sendData(data: any) {
    this.dataService = data;
  }

  clearData() {
    this.dataService = '';
  }

  getData() {
    return this.dataService;
  }
}
