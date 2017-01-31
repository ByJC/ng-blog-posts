import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ExFormControlService } from './ex.formcontrol.service';

import 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'exformcontrol',
  templateUrl: 'ex.formcontrol.component.html',
  providers: [ExFormControlService]
})

export class ExFormControlComponent implements OnInit {

  myControl = new FormControl();
  profiles: Observable<any[]>;
  search: string = 'ByJC';

  constructor(public http: Http, private efcService: ExFormControlService) { }
  
  ngOnInit() { 
    this.profiles = this.myControl.valueChanges
      .startWith(this.search)
      .filter(text => text.length > 2)
      .debounceTime(200)
      .map(text => `https://api.github.com/search/users?q=${text}&location:paris&sort=followers&order=desc`)
      .switchMap(url => this.efcService.getUsers(url), (_, res)=> res.items);
  }
}