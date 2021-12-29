import { User } from './model/auth.model';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';

import { state } from '@angular/animations';
import { actions } from './action-types';

export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(actions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(actions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
