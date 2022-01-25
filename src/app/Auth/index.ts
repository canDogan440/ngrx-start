import { User } from './model/auth.model';
import { createReducer, on } from '@ngrx/store';

import { state } from '@angular/animations';
import { authActions } from './action-types';

export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(authActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
