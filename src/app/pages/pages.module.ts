import { NotesEffects } from './pages-features/effects/notes.effects';
import { EffectsModule } from '@ngrx/effects';
import { PagesResolver } from './pages-features/pages.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { AuthGuard } from '../Auth/aouth.guard';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { notesReducer } from './pages-features/reducers/notes.reducers';
import { NotesCardListComponent } from './notes-card-list/notes-card-list.component';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AuthTestComponent } from './auth-test/auth-test.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    resolve: { notes: PagesResolver },
  },
  { path: 'add-note', component: AddNoteComponent, canActivate: [AuthGuard] },
  { path: 'edit-note', component: EditNoteComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    MainComponent,
    AddNoteComponent,
    NotesCardListComponent,
    EditNoteComponent,
    ErrorMessageComponent,
    AuthTestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    StoreModule,
    StoreDevtoolsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,

    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,

    EffectsModule.forFeature([NotesEffects]),
    StoreModule.forFeature('notes', notesReducer),
  ],

  providers: [PagesResolver],
})
export class PagesModule {}
