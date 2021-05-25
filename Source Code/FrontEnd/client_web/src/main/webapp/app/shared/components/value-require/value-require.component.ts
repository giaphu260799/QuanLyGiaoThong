import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-value-require',
  templateUrl: './value-require.component.html',
  styleUrls: ['./value-require.component.scss'],
})
export class ValueRequireComponent implements OnInit {
  @Input() title = '';
  @Input() content = '';
  constructor() {}

  ngOnInit(): void {}
}
