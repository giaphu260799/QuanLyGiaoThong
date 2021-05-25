import { Component, Input, OnInit } from '@angular/core';
import { YeuCau } from 'app/models/uitil.model';
@Component({
  selector: 'jhi-card-dang-ki',
  templateUrl: './card-dang-ki.component.html',
  styleUrls: ['./card-dang-ki.component.scss'],
})
export class CardDangKiComponent implements OnInit {
  @Input() data: YeuCau = new YeuCau();
  constructor() {}
  ngOnInit(): void {}
}
