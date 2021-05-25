import { Component, OnInit } from '@angular/core';
import { BienBanViPhamService } from 'app/core/services/bienBan.service';
import { BienBanViPhams } from 'app/models/uitil.model';

@Component({
  selector: 'jhi-them-bien-ban',
  templateUrl: './them-bien-ban.component.html',
  styleUrls: ['./them-bien-ban.component.scss'],
})
export class ThemBienBanComponent implements OnInit {
  soLoi = 1;
  id_BienBan = 0;
  click = false;
  error = false;
  insertError = false;
  bienBan: BienBanViPhams = new BienBanViPhams();
  constructor(private service: BienBanViPhamService) {}
  insertBienBan(): boolean {
    if (this.soLoi && this.bienBan.ThoiGianViPham) {
      this.error = false;
      this.click = true;
      this.service.insertBienBan(this.bienBan).subscribe(data => {
        if (data) {
          this.id_BienBan = data.ID;
          this.insertError = false;
        } else {
          this.insertError = true;
        }
      });
    } else {
      this.error = true;
    }
    return false;
  }
  ngOnInit(): void {}
}
