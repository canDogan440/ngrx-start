import { NotesEffects } from './pages/pages-features/effects/notes.effects';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './Auth/auth.module';

import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { EffectsModule } from '@ngrx/effects';
import { PagesModule } from './pages/pages.module';
import { AuthGuard } from './Auth/aouth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/auth',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    NoopAnimationsModule,

    PagesModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),

    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    AuthModule.forRoot(),

    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([NotesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
