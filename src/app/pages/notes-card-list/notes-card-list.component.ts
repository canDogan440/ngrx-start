import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Notes } from '../pages-features/models/note.model';

@Component({
  selector: 'app-notes-card-list',
  templateUrl: './notes-card-list.component.html',
  styleUrls: ['./notes-card-list.component.scss'],
})
export class NotesCardListComponent implements OnInit {
  @Input() notes: any;
  @Output() notesChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteLocalStorageItem(id: number) {}
}
