import { Directive, ElementRef, Renderer, OnInit, Input } from "@angular/core";

@Directive({selector:'[customhide]'})

export class custommyhidedirective implements OnInit{
    @Input() customhide : boolean;
    constructor(private ele:ElementRef,private renderer:Renderer){

    }

     ngOnInit(){
         console.log(this.customhide);
         if(this.customhide)
         {
         this.renderer.setElementStyle(this.ele.nativeElement,'display','none')
        }
     }


}