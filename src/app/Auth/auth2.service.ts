import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/auth.model';

@Injectable()
export class Auth2Service {
  constructor(private http: HttpClient) {}

  url: string =
    'https://ng-complete-d81b2-default-rtdb.europe-west1.firebasedatabase.app/';

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.url, { email, password });
  }
}
