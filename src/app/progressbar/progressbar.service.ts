import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable() 
export class ProgressBarService {
  subject = new BehaviorSubject<any>(true);
  changes = this.subject
              .asObservable()
              .do(changes => console.log('new state', changes)); 
    
  constructor(private http: Http) { }
  show() {
    this.subject.next(true);
  }
  hide() {
    this.subject.next(false);
  }
}

