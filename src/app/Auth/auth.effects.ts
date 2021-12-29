import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actions } from './action-types';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.login),
        tap((action) => {
          localStorage.setItem('user', JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.logout),
        tap((action) => {
          localStorage.removeItem('user');

          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );
}
