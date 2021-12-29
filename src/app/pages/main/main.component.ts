import { NoteService } from './../../services/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  notesData!: any;
  constructor(private notesService: NoteService) {}

  ngOnInit(): void {
    this.display();
  }

  display() {
    this.notesService.getNotesData().subscribe((data) => {
      console.log(data);
      this.notesData = data;
    });
  }
}
