import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface User {
  id: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://ng-complete-d81b2-default-rtdb.europe-west1.firebasedatabase.app/';

  login(email: string, password: string) {
    let user = { email, password };
    this.http
      .put(this.url, user)
      .subscribe((response) => console.log(response));
    // return this.http.post<User>('/api/login', { email, password });
  }
}
