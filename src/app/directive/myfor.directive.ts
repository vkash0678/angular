import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({selector:'[myfor]'})

export class myforDirective implements OnInit {

    constructor(private temp:TemplateRef<any>,private container:ViewContainerRef){}

    ngOnInit(){

    }

    @Input() set myfor (loop:number){

        for(let i=0;i<=loop;i++)
        {
            this.container.createEmbeddedView(this.temp);
        }
    } 
}