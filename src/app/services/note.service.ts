import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notes } from '../pages/pages-features/models/note.model';
import * as notes from './../../assets/notes.json'

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  data: Notes = notes;
  constructor(private http: HttpClient) {}

  url: string = " ./../../assets/notes.json'";

  getNotesData() {
    const notesData$ = new Observable((observer) => {
      observer.next(this.data.notes);
    });
    return notesData$;
  }
}
