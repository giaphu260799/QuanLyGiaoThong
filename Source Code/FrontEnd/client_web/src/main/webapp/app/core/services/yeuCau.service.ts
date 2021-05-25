import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YeuCau } from 'app/models/uitil.model';
import { yeuCauRL } from 'app/models/CommonApiUrl-model';
@Injectable({
  providedIn: 'root',
})
export class YeuCauService {
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  getListYeuCau(): Observable<[YeuCau]> {
    return this.http.get<[YeuCau]>(yeuCauRL, {
      headers: this.header,
    });
  }
}
