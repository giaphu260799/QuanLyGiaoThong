import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NguoiDangKiXe } from 'app/models/uitil.model';
import { dangKiXeURL } from 'app/models/CommonApiUrl-model';
@Injectable({
  providedIn: 'root',
})
export class NguoiDangKiXeService {
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  getByIdentityCard(id: string): Observable<NguoiDangKiXe> {
    return this.http.get<NguoiDangKiXe>(dangKiXeURL + '?CMND=' + id, {
      headers: this.header,
    });
  }
}
