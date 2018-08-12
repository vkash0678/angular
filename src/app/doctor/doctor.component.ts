import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  private doctor:any=[];
  private doctors: any []=[
      {Name : "ABC",Age:35,Speciality:"Surgeon",Mobile:"**********",Email:"ABC@XYZ.com",pic:'/assets/Images/download1.jfif'},
      {Name : "DEF",Age:42,Speciality:"BDS",Mobile:"2222222222",Email:"DEF@XYZ.com",pic:'/assets/Images/download1.jfif'}

  ]
  constructor() { }

  ngOnInit() {
  }

}
