import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Xe } from 'app/models/uitil.model';
import { xeURL } from 'app/models/CommonApiUrl-model';

@Injectable({
  providedIn: 'root',
})
export class XeService {
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  getXe(bienSo: string): Observable<Xe> {
    return this.http.get<Xe>(xeURL + '/TraCuuBienSo?BienSo=' + bienSo, {
      headers: this.header,
    });
  }
}
