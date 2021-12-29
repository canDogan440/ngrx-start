import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '.';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  //memorised fucntion
  selectAuthState,

  (auth) => {
    if (auth == undefined) {
      console.log('bura çalışıyor');
      return false;
    } else {
      return !!auth.user;
    }
  }
);

export const isLoggedOut = createSelector(
  //memorised fucntion
  isLoggedIn,
  (loggedIn) => !loggedIn
);
