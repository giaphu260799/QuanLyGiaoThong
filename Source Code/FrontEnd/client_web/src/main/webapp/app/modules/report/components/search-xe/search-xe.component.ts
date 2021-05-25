import { Component, OnInit } from '@angular/core';
import { Xe } from 'app/models/uitil.model';
import { XeService } from 'app/core/services/xe.service';
@Component({
  selector: 'jhi-search-xe',
  templateUrl: './search-xe.component.html',
  styleUrls: ['./search-xe.component.scss'],
})
export class SearchXeComponent implements OnInit {
  idXe = '';
  visible = false;
  error = false;
  xe: Xe = new Xe();
  constructor(private service: XeService) {}
  submit(): void {
    if (this.idXe) {
      this.error = false;
      this.service.getXe(this.idXe).subscribe(data => {
        if (!data) {
          this.visible = true;
        } else {
          this.xe = data;
          this.visible = false;
        }
      });
    } else {
      this.error = true;
    }
  }
  ngOnInit(): void {}
}
