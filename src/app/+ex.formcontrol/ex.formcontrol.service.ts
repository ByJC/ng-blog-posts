import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable ()
export class ExFormControlService {

    constructor(public http: Http) {}

    getUsers(url) {
        return this.http.get(url).map(res => res.json());
    }
}