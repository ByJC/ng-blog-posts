import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable ()
export class ExampleService {

    constructor(public http: Http) {}

    getDataA() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1').map(res => res.json());
    }
    getDataB() {
        return this.http.get('https://jsonplaceholder.typicode.com/users/1').map(res => res.json());
    }
    getDataC() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').map(res => res.json());
    }
}