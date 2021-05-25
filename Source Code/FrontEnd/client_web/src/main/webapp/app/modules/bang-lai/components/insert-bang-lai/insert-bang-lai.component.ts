import { BangLaiService } from 'app/core/services/BangLai.service';
import { BangLai } from 'app/models/uitil.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-insert-bang-lai',
  templateUrl: './insert-bang-lai.component.html',
  styleUrls: ['./insert-bang-lai.component.scss'],
})
export class InsertBangLaiComponent implements OnInit {
  bangLai: BangLai = new BangLai();
  insertError = false;
  constructor(private service: BangLaiService) {}
  insertBangLai(): void {
    this.service.insertLicense(this.bangLai).subscribe(data => {
      if (data) {
        alert('Insert thành công');
        this.bangLai = new BangLai();
      } else {
        this.insertError = true;
      }
    });
  }
  reset(): void {
    this.bangLai = new BangLai();
  }
  ngOnInit(): void {
    this.insertError = false;
  }
}
