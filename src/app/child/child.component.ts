import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() abc: string;
  @Output() childEvent = new EventEmitter();
  counterValue = 0;
  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.childEvent.emit(value);
    this.ViewChildChange();
  }

  ViewChildChange() {
    return 'Child to parent communication using viewchild';
  }
  

  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

}
