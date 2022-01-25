import { allNotesLoaded } from './../actions/notes.actions';
import { NoteService } from './../../../services/note.service';
import { concatMap, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { notesAction } from '../actions/action.types';

@Injectable()
export class NotesEffects {
  constructor(
    private actions$: Actions,
    private notesService: NoteService
    ) {}

  noteHolder: any = [];

  loadCourses$ = createEffect(() =>
    this.actions$
    .pipe(
      ofType(notesAction.loadAllNotes),
      concatMap(
        action => this.notesService.getNotesData()),
      map((notes:any )=> allNotesLoaded({notes}))

      )
  );

  submit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(notesAction.submitNote),
        tap((action) => {
          console.log(action.note);
          this.noteHolder.push(action.note);

          localStorage.setItem('notes', JSON.stringify(this.noteHolder));
        })
      ),
    { dispatch: false }
  );
}
