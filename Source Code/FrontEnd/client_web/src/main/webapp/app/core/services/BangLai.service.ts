import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BangLai } from 'app/models/uitil.model';
import { bangLaiURL } from 'app/models/CommonApiUrl-model';
@Injectable({
  providedIn: 'root',
})
export class BangLaiService {
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  getLicenseByID(id: string): Observable<BangLai> {
    return this.http.get<BangLai>(bangLaiURL + '?SoBangLai=' + id, {
      headers: this.header,
    });
  }
  deleteLicense(id: number): Observable<boolean> {
    return this.http.delete<boolean>(bangLaiURL + '/' + id, {
      headers: this.header,
    });
  }
  updateLicense(bangLai: BangLai): Observable<boolean> {
    return this.http.put<boolean>(bangLaiURL, JSON.stringify(bangLai), {
      headers: this.header,
    });
  }
  insertLicense(bangLai: BangLai): Observable<boolean> {
    return this.http.post<boolean>(bangLaiURL, JSON.stringify(bangLai), {
      headers: this.header,
    });
  }
}
