import { loadAllNotes, allNotesLoaded } from './actions/notes.actions';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { AppState } from './../../reducers/index';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { areNotesLoaded } from '../notes.selectors';

@Injectable()
export class PagesResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}

  loading: boolean = false;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store
    .pipe(
      select(areNotesLoaded),
      tap((notesAreLoaded) => {
        if (!this.loading && !notesAreLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllNotes());
        }
      }),
      filter(notesAreLoaded => notesAreLoaded),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
