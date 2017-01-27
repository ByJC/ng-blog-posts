import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ExampleService } from './example.service'

import 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'example',
  templateUrl: 'example.component.html',
  providers: [ExampleService]
})

export class ExampleComponent implements OnInit {
  
  dataA: any = [];
  dataB: any = [];
  dataC: any = [];

  constructor(public http: Http, private exampleService: ExampleService) {}
  
  ngOnInit() { 
    this.usingForkJoin();
  }

  usingFlatMap() {
    this.exampleService.getDataA()
      .flatMap(res => {
        this.dataA = res;
        return this.exampleService.getDataB();
      })
      .flatMap(res => {
        this.dataB = res;
        return this.exampleService.getDataC();
      })
      .subscribe(res => this.dataC = res);
  }

  usingForkJoin() {
   Observable.forkJoin([
        this.exampleService.getDataA(), 
        this.exampleService.getDataB(), 
        this.exampleService.getDataC()
    ])
    .subscribe(([A,B,C]) => {
      this.dataA = A;
      this.dataB = B;
      this.dataC = C;
    });
  }
}