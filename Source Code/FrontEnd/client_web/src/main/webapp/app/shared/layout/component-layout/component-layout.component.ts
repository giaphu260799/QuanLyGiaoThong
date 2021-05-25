import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'jhi-component-layout',
  templateUrl: './component-layout.component.html',
  styleUrls: ['./component-layout.component.scss'],
})
export class ComponentLayoutComponent implements OnInit {
  @Input() size = '';
  @Input() loadFlag = true;
  @Input() hasFooter = true;
  @Input() idComponent = '';
  visible = true;
  checked = false;

  constructor() {}
  ngOnInit(): void {}

  clickFavoriteStar(): void {
    this.checked = !this.checked;
  }

  chooseSize(): any {
    const large = { width: 'calc(100% - 40px)' };
    const medium = { width: 'calc((100% - 63px)/2)' };
    const small = { width: 'calc((100% - 91px)/3)' };
    if (this.size === 'small') {
      return small;
    } else if (this.size === 'medium') {
      return medium;
    } else return large;
  }
}
