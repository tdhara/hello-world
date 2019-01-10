
import {  Component, 
          OnInit, 
          ViewChild, 
          AfterViewInit,
          ElementRef } from '@angular/core';
import { ChildComponent } from './../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  parentMessage = "message from parent to child - via Input";
  @ViewChild('someInput') someInput = ElementRef;
  @ViewChild(ChildComponent) child: ChildComponent;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.child.ViewChildChange());
    //this.someInput.value = ''
  }

  ngOnChanges() {
    console.log('ngOnChanges');

  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
