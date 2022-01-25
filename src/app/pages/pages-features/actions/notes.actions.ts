import { Notes, NotesEntity } from './../models/note.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadAllNotes = createAction('[Notes Resolver] Load All Notes');

export const submitNote = createAction(
  '[Add Note Page]Submit New Note',
  props<{ note: NotesEntity }>()
);

export const allNotesLoaded = createAction(
  '[Load Notes Effect] All Notes Loaded',
  props<{ notes: Notes[] }>()
);

export const noteUpdate = createAction(
  ' [Update Note] Update for Note Element',
  props<{ update: Update<Notes[]> }>()
);
