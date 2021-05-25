import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanBo } from 'app/models/uitil.model';
import { canBoURL } from 'app/models/CommonApiUrl-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  getTaikhoan(taikhoan: CanBo): Observable<CanBo> {
    return this.http.get<CanBo>(canBoURL + '/login?username=' + taikhoan.username + '&password=' + taikhoan.password, {
      headers: this.header,
    });
  }
  changePassword(taikhoan: CanBo, newpass: string): Observable<boolean> {
    return this.http.get<boolean>(
      canBoURL + '/DoiMatKhau?username=' + taikhoan.username + '&oldPassword=' + taikhoan.password + '&newPassword=' + newpass,
      {
        headers: this.header,
      }
    );
  }
}
