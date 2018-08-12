import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() carbine = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.carbine.emit('Hello from child!');
  }

}
