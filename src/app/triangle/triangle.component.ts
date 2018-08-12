import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  private A:string;
  private B:string;
  private C:string;
  private S:number;
  private Area:number;
  constructor() { }

  ngOnInit() {
  }

  area()
  {
    this.S = (parseFloat(this.A)+parseFloat(this.B)+parseFloat(this.C))/2.0;
    this.Area  =  Math.sqrt(this.S*(this.S-parseFloat(this.A))*(this.S-parseFloat(this.B))*(this.S-parseFloat(this.C)));

  }

}
