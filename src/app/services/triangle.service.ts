import { perimeterService } from "./perimeter.service";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()

export class triangleService{
    constructor(private peri:perimeterService){}

    getArea(a,b,c){
        var s = this.peri.getPerimeter(a,b,c);
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));

    }

}