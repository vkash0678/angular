import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({selector:'[myif]'})

export class myifDirective implements OnInit{

constructor(private container:ViewContainerRef,private temp:TemplateRef<any>){
        
    }
    ngOnInit(){

    }

    @Input() set myif(stt:boolean){
        if(stt){
                this.container.createEmbeddedView(this.temp);
        }else{
            this.container.clear;
        }
    }

}