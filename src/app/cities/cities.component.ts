import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { calculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  private city:any={};
  private cities :any[] = [];

  constructor(private http: Http,private calc:calculatorService) { }

  ngOnInit(){
    console.log("The sum is "+this.calc.add(2,6));
    this.getCities();
  }

  getCities(){
    this.http.get("https://demofir-4ab44.firebaseio.com/cities.json").subscribe(
      (res)=>{
       var resJson = res.json();
       var keys =  Object.keys(resJson);
       this.cities = keys.map((key)=>{
          return {key:key,data:resJson[key]}
       })
      },
      (err)=>{
        console.log("Erros is ",err)
      },
      ()=>{
        this.getCities();
      }
    )
  }

  saveCity() {

    this.http.post("https://demofir-4ab44.firebaseio.com/cities.json",this.city).subscribe(
      (res)=>{
        console.log("Record saved");
      },
      (err)=>{
        console.log("Erros is ",err)
      },
      ()=>{

      }
    )
  }

  deleteCity(key) {

    this.http.delete("https://demofir-4ab44.firebaseio.com/cities/"+key+".json",this.city).subscribe(
      (res)=>{
        console.log("Record deleted");
      },
      (err)=>{
        console.log("Erros is ",err)
      },
      ()=>{

      }
    )
  }

}
