import { NgModule, ModuleWithProviders } from '@angular/core';
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

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'add-note', component: AddNoteComponent, canActivate: [AuthGuard] },
  { path: 'edit-note', component: EditNoteComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [MainComponent, AddNoteComponent],
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
  ],
})
export class PagesModule {

}
