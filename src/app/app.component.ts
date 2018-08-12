import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private A:string;
  private B:string;
  private C:string;
  private S:number;
  private Area:number;
  
  ngOnInit(){

  }

  area()
  {
    this.S = (parseInt(this.A)+parseInt(this.B)+parseInt(this.C))/2.0;
    this.Area  =  Math.sqrt(this.S*(this.S-parseInt(this.A))*(this.S-parseInt(this.B))*(this.S-parseInt(this.C)));

  }
}
