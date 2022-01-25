import { NotesState } from './pages-features/reducers/notes.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNotes from './pages-features/reducers/notes.reducers';

export const selectNotesState = createFeatureSelector<NotesState>('notes');

export const selectAllNotes = createSelector(
  selectNotesState,
  fromNotes.selectAll
);

// export const filterNotes = createSelector(
//     selectAllNotes,
//     notes => notes.filter(notes => notes.)
// )

export const areNotesLoaded = createSelector(
  selectNotesState,
  state => state.allNotesLoaded
)