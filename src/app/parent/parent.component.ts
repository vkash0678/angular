import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  private child_msg:string;
  constructor() { }

  ngOnInit() {
  }

  oncarbine(mssge: string){
      this.child_msg = mssge;
  }

}
