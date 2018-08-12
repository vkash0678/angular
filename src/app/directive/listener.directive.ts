import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({selector:'[hoverdir]'})

export class listenerdirective{

    constructor(private ele:ElementRef,private rend:Renderer){

    }
@HostListener('mouseenter') onmouseenter(){

    this.rend.setElementStyle(this.ele.nativeElement,'text-decoration','underline')
    this.rend.setElementStyle(this.ele.nativeElement,'color','red')
}

@HostListener('mouseleave') onmouseleave(){

    this.rend.setElementStyle(this.ele.nativeElement,'text-decoration','none')
    this.rend.setElementStyle(this.ele.nativeElement,'color','green')
}
}
