import { Component, OnInit } from '@angular/core';
import { BangLai } from 'app/models/uitil.model';
import { BangLaiService } from 'app/core/services/BangLai.service';
@Component({
  selector: 'jhi-search-bang-lai',
  templateUrl: './search-bang-lai.component.html',
  styleUrls: ['./search-bang-lai.component.scss'],
})
export class SearchBangLaiComponent implements OnInit {
  soBangLai = '';
  update = false;
  visible = false;
  error = false;
  deleteError = false;
  list: BangLai = new BangLai();
  constructor(private service: BangLaiService) {}
  submit(): void {
    if (this.soBangLai) {
      this.error = false;
      this.deleteError = false;
      this.service.getLicenseByID(this.soBangLai).subscribe(data => {
        if (!data) {
          this.visible = true;
        } else {
          this.list = data;
          this.visible = false;
        }
      });
    } else {
      this.error = true;
    }
    this.update = false;
  }
  delete(): boolean {
    this.service.deleteLicense(this.list.ID).subscribe(data => {
      if (data) {
        alert('Xóa thành công');
        location.reload();
      } else {
        this.deleteError = true;
      }
    });
    return false;
  }
  ngOnInit(): void {}
}
