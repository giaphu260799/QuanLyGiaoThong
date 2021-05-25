import { CanBo } from './../../../../models/uitil.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  user: CanBo;
  constructor() {
    this.user = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('userInfo'))));
  }

  ngOnInit(): void {}
}
