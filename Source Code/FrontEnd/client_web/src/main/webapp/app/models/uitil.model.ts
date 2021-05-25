export class CanBo {
  id = 0;
  Ten = '';
  Bac = 0;
  username = '';
  password = '';
  constructor(username: string, pass: string) {
    this.username = username;
    this.password = pass;
  }
}
export class NguoiDangKiXe {
  ID = 0;
  Ten = '';
  CMND = '';
  GioiTinh = '';
  NgaySinh = 0;
  DiaChi = '';
  username = 'user1';
  password = '123';
}
export class BienBanViPhams {
  ID = 0;
  TongTien = 0;
  TongDiemTru = 0;
  ThoiGianViPham = '';
  HDNopPhat = null;
  BangLai_id = 0;
}
export class BangLai {
  ID = 0;
  Hang = '';
  NgayCap = '';
  NoiCap = '';
  SoBangLai = '';
  NguoiDung_id = 0;
  NguoiDung = new NguoiDangKiXe();
  BienBanViPhams = new BienBanViPhams();
}
export class Xe {
  ID = 0;
  SoKhung = '';
  SoMay = '';
  GiaTien = 0;
  LoaiXe_id = 0;
  NguoiDung_id = 0;
  BienSo = 0;
}
export class LoiViPham {
  ID = 0;
  LoiViPham1 = '';
  MucPhat = 0;
  DiemTru = 0;
}
export class YeuCau {
  ID = 0;
  SoKhung = '';
  SoMay = '';
  NgayHen = '';
  TrangThai = '';
  CanBo_id = 0;
  HDCapBien = 0;
  MPCapBien_id = 0;
  NguoiDung = new NguoiDangKiXe();
  GiaTien = 0;
}
