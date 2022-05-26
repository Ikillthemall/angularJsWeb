import { NhanVien } from './nhan-vien';

export interface Team {
  memberSouth: NhanVien[];
  memberNorth: NhanVien[];
  memberCentral: NhanVien[];
}
