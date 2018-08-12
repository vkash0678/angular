import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private product:any []=[
    {ID : 1, Name : "Telivision",cost: 50000},
    {ID : 2, Name : "Refrigerator",cost : 25000},
    {ID : 3 ,Name : "Oven",cost : 5000}
  ]
  constructor() { }

  ngOnInit() {
  }

}
