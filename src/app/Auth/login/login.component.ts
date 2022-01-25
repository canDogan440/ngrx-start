import { User } from './../model/auth.model';
import { login } from './../auth.actions';
import { Auth2Service } from '../auth2.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Auth2Service],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: Auth2Service,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ['test@angular-example.com', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  isLogin: boolean = true;

  switchToSignInLogIn() {
    this.isLogin = !this.isLogin;
  }

  form: any;
  login() {
    const val = this.form.value;
    let user: User = { email: val.email, password: val.password };

    this.store.dispatch(login({ user }));

    this.router.navigateByUrl('/main');
  }
}
