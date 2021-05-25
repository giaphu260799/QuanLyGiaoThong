import { BangLaiService } from 'app/core/services/BangLai.service';
import { Component, Input, OnInit } from '@angular/core';
import { BangLai } from 'app/models/uitil.model';

@Component({
  selector: 'jhi-update-bang-lai',
  templateUrl: './update-bang-lai.component.html',
  styleUrls: ['./update-bang-lai.component.scss'],
})
export class UpdateBangLaiComponent implements OnInit {
  @Input() bangLai: BangLai = new BangLai();
  updateError = false;
  constructor(private service: BangLaiService) {}
  updateBangLai(): void {
    this.service.updateLicense(this.bangLai).subscribe(data => {
      if (data) {
        alert('Update thành công');
      } else {
        this.updateError = true;
      }
    });
  }
  ngOnInit(): void {
    this.updateError = false;
  }
}
