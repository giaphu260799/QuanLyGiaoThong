import { Component, OnInit } from '@angular/core';
import { YeuCauService } from 'app/core/services/yeuCau.service';
import { YeuCau } from 'app/models/uitil.model';

@Component({
  selector: 'jhi-xac-nhan-dang-ki',
  templateUrl: './xac-nhan-dang-ki.component.html',
  styleUrls: ['./xac-nhan-dang-ki.component.scss'],
})
export class XacNhanDangKiComponent implements OnInit {
  list: YeuCau[] = [];
  loadFlag = false;
  constructor(private service: YeuCauService) {}

  ngOnInit(): void {
    this.service.getListYeuCau().subscribe(data => {
      this.list = data;
      this.loadFlag = true;
    });
  }
}
