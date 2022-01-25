import { User } from './model/auth.model';
import { createAction, props } from '@ngrx/store';
import { tap } from 'rxjs';

export const login = createAction(
  '[Login Page] User Login',
  props<{ user: User }>()
);

export const logout = createAction(
  '[Top Menu] Logout');
