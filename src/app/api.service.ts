import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiServices {
  constructor(private http: HttpClient) {}
  getUserData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}

export default ApiServices;
