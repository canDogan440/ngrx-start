import { createAction } from '@ngrx/store';

export const loadAllNotes = createAction(
    '[Notes Resolver] Load All Notes'
    );

export const allCoursesLoaded = createAction(
  '[Load Courses Effect] All Courses Loaded'
);
