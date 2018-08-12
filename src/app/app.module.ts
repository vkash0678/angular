import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TriangleComponent } from './triangle/triangle.component';
import { ProductsComponent } from './products/products.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CitiesComponent } from './cities/cities.component';
import { calculatorService } from './services/calculator.service';
import { perimeterService } from './services/perimeter.service';
import { triangleService } from './services/triangle.service';
import { TestdirComponent } from './testdir/testdir.component';
import { myhidedirective } from './directive/myhide.directive';
import { myunderline } from './directive/myunderline.directive';
import { custommyhidedirective } from './directive/custom.myhide.directive';
import { listenerdirective } from './directive/listener.directive';
import { myifDirective } from './directive/myif.directive';
import { myforDirective } from './directive/myfor.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TriangleComponent,
    ProductsComponent,
    DoctorComponent,
    CitiesComponent,
    TestdirComponent,
    myunderline,
    myhidedirective,
    custommyhidedirective,
    listenerdirective,
    myifDirective,
    myforDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [calculatorService,perimeterService,triangleService,myhidedirective,myunderline,custommyhidedirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
