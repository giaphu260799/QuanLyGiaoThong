import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BienBanViPhams, LoiViPham } from 'app/models/uitil.model';
import { bienBanURL, loiViPhamURL } from 'app/models/CommonApiUrl-model';
@Injectable({
  providedIn: 'root',
})
export class BienBanViPhamService {
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  insertBienBan(bienBan: BienBanViPhams): Observable<BienBanViPhams> {
    return this.http.post<BienBanViPhams>(bienBanURL, bienBan, {
      headers: this.header,
    });
  }
  getLoiViPham(): Observable<[LoiViPham]> {
    return this.http.get<[LoiViPham]>(loiViPhamURL, {
      headers: this.header,
    });
  }
  insertLoiVaoBienBan(bienBanViPham_id: number, loiViPham_id: number): Observable<boolean> {
    console.log(bienBanURL + '?bienBanViPham_id=' + bienBanViPham_id + '&loiViPham_id=' + loiViPham_id);
    return this.http.post<boolean>(bienBanURL + '?bienBanViPham_id=' + bienBanViPham_id + '&loiViPham_id=' + loiViPham_id, {
      headers: this.header,
    });
  }
  getBienBan(): Observable<[BienBanViPhams]> {
    return this.http.get<[BienBanViPhams]>(bienBanURL, {
      headers: this.header,
    });
  }
}
