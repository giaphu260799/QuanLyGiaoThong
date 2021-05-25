import { BienBanViPhams } from 'app/models/uitil.model';
import { BienBanViPhamService } from 'app/core/services/bienBan.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-tong-tien',
  templateUrl: './tong-tien.component.html',
  styleUrls: ['./tong-tien.component.scss'],
})
export class TongTienComponent implements OnInit {
  @Input() id = 0;
  loadFlag = false;
  bienBan: BienBanViPhams = new BienBanViPhams();
  constructor(private service: BienBanViPhamService) {}
  Back(): void {
    location.reload();
  }
  ngOnInit(): void {
    this.service.getBienBan().subscribe(list => {
      list.forEach(element => {
        if (element.ID === this.id) {
          this.bienBan = element;
        }
      });
      this.loadFlag = true;
    });
  }
}
