import { allNotesLoaded } from './../actions/notes.actions';
import { state } from '@angular/animations';
import { Notes } from '../models/note.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { notesAction } from '../actions/action.types';

export interface NotesState extends EntityState<Notes> {
  allNotesLoaded: boolean;
}

export const adapter = createEntityAdapter<Notes>();

export const initialNotesState = adapter.getInitialState({
  allNotesLoaded: false,
});

export const notesReducer = createReducer(
  initialNotesState,
  on(notesAction.allNotesLoaded, (state, action) =>
    adapter.setAll(action.notes,
       { ...state, allNotesLoaded: true })
  )
);

export const { selectAll } = adapter.getSelectors();
