import { ElementRef, Renderer, Directive } from "@angular/core";

@Directive({selector: '[myunderline]'})

export class myunderline{
    constructor (private ele:ElementRef,private renderer:Renderer){
        renderer.setElementStyle(ele.nativeElement,'text-decoration','underline')
    }


}