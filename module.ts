import { NgModule, Component, VERSION }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Component, Input } from '@angular/core';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'jcomponent2-counter',
  template: `
      <p>
        <button (click)="decreaseFn()">Decrease</button>
        {{myVal}}
        <button (click)="increaseFn()">Increase</button>
      </p>
  `
})
export class Jcomponent2CounterComponent {

  @Input()
  myVal: number = 0;

  @Output()
  myValChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  increaseFn() {
    this.myVal++;
    this.myValChangeEvent.emit(this.myVal);
  }

  decreaseFn() {
    this.myVal--;
    this.myValChangeEvent.emit(this.myVal);
  }

}



//------------------------
@Component({
  selector: 'jcomponent1',
  templateUrl: './jcomponent1.component.html'
})
export class Jcomponent1Component {

  @Input() prop1Str: string;
  @Input('prop2Str') prop2: string;
  @Input() prop3Obj: Object;
  @Input() prop4Arr: Array<any>;

  constructor() { }

}


//------------------------
@Component({
  selector: 'oneway-binding',
  templateUrl: './oneway-binding.component.html'
})
export class OnewayBindingComponent {

  myStr : string;
  myObj : Object;
  myArr : Array<any>;

  myStr1 : string;
  myNumbr1 : number;

  constructor(){
  
    this.myStr = 'Jagadeesh';
    this.myObj = { name: 'Jagdeesh', age: 22 };
    this.myArr = ['Jagadeesh', 'Sundar', 'Saran'];

    this.myStr1= 'Jagadeesh1';
    this.myNumbr1= 10;
  }

  getMyStrFn() : string {
    return this.myStr;
  }


  myInputEventFired(event) {
    //console.log(event);
    this.myStr1 = event.target.value;
  }

  btnClickEventFired(event) {
    // console.log(event);
    this.myStr1 = 'Jagadeesh1';

  }

  myValChangeEventFired(myVal) {
    // console.log(myVal);
    this.myNumbr1 = myVal;

  }
}


//------------------------
@Component({
  selector: 'twoway-binding',
  templateUrl: './twoway-binding.component.html'
})
export class TwowayBindingComponent {
  
}





//------------------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor() {
    this.angularVersion = VERSION.full;
    
  }  

}

//------------------------

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page1', component: OnewayBindingComponent },
  { path: 'page2', component: TwowayBindingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

//------------------------

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    OnewayBindingComponent,
    TwowayBindingComponent,
    Jcomponent1Component,
    Jcomponent2CounterComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

