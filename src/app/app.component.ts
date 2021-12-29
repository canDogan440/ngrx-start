import { Router } from '@angular/router';
import { select } from '@ngrx/store';
import { isLoggedIn, isLoggedOut } from './Auth/auth.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { logout } from './Auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private route: Router) {}

  isLoggedIn$: Observable<boolean> | undefined;
  isLoggedOut$: Observable<boolean> | undefined;

  title = 'notepad-app';

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));

    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  login() {
    this.route.navigateByUrl('/auth');
  }

  logout() {
    this.store.dispatch(logout());
    this.route.navigateByUrl('/auth');
  }
}
