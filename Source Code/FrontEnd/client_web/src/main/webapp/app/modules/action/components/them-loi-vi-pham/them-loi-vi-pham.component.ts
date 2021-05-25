import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { BienBanViPhamService } from 'app/core/services/bienBan.service';
import { LoiViPham } from 'app/models/uitil.model';
@Component({
  selector: 'jhi-them-loi-vi-pham',
  templateUrl: './them-loi-vi-pham.component.html',
  styleUrls: ['./them-loi-vi-pham.component.scss'],
})
export class ThemLoiViPhamComponent implements OnInit, OnChanges {
  @Input() soLoi = 0;
  @Input() idBienBan = 0;
  done = false;
  loadFlag = false;
  loiViPham: number[] = [];
  listLoi: LoiViPham[] = [];
  insertError = false;
  constructor(private service: BienBanViPhamService) {}
  setUp(): void {
    this.loiViPham = [];
    for (let index = 0; index < this.soLoi; index++) {
      this.loiViPham.push(0);
    }
  }
  insertLoi(): boolean {
    let check = true;
    this.insertError = false;
    this.loiViPham.forEach(id => {
      console.log(id + '/' + this.idBienBan);
      this.service.insertLoiVaoBienBan(this.idBienBan, id).subscribe(data => {
        if (!data) {
          check = false;
        }
      });
    });
    if (check) {
      alert('tạo biên bản thành công');
      this.done = true;
      return true;
    } else {
      this.insertError = true;
      return false;
    }
  }
  ngOnInit(): void {
    this.service.getLoiViPham().subscribe(data => {
      this.listLoi = data;
      this.loadFlag = true;
    });
  }
  ngOnChanges(): void {
    this.setUp();
  }
}
