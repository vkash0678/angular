import { Directive, OnInit, Renderer, ElementRef } from "@angular/core";

@Directive({selector:'[myhide]'})

export class myhidedirective implements OnInit{

    ngOnInit(){

    }

    constructor(private rend:Renderer,private ele:ElementRef){

        this.rend.setElementStyle(this.ele.nativeElement,'color','red');
    }

}