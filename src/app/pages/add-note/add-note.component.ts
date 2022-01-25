import { submitNote } from './../pages-features/actions/notes.actions';
import { NotesEntity } from './../pages-features/models/note.model';
import { NoteService } from './../../services/note.service';
import { AppState } from './../../reducers/index';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private noteService: NoteService
  ) {
    this.form = fb.group({
      header: ['enter your header as you like', [Validators.required]],
      body: ['enter your note as you like', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  saveNote() {
    // const value = this.form.value;
    // let note: NotesEntity = { id:, header: value.header, noteBody: value.body };
    // this.store.dispatch(submitNote({ note }));
    this.router.navigateByUrl('/main');
  }
}
