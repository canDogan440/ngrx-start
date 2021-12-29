import { User } from './model/auth.model';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] User Login',
  props<{ user: User }>()
);

export const logout = createAction(
  '[Top Menu] Logout');
