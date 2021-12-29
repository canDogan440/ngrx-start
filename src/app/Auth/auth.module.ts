import { AuthEffects } from './auth.effects';
import { authReducer } from './index';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { Auth2Service } from './auth2.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './aouth.guard';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('auth', authReducer),
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    EffectsModule.forFeature([AuthEffects])
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [Auth2Service, AuthGuard],
    };
  }
}
