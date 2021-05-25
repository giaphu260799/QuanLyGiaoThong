import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jhi-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  @Input() data: any;
  @Output() selected = new EventEmitter();
  displayList: String = 'none';
  backgroundActive: String = 'none';
  isDoubleClicked = false;

  constructor(private eRef: ElementRef) {}
  selectItem(itemKey: string): void {
    this.selected.emit(itemKey);
  }
  @HostListener('document:click', ['$event'])
  clickout(event: any): void {
    if (this.eRef.nativeElement.contains(event.target) && !this.isDoubleClicked) {
      this.displayList = 'block';
      this.backgroundActive = '#02629f';
      this.isDoubleClicked = true;
    } else {
      this.displayList = 'none';
      this.backgroundActive = 'none';
      this.isDoubleClicked = false;
    }
  }
  ngOnInit(): void {}
}
