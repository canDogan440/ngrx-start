import { EditNoteComponent } from './../edit-note/edit-note.component';
import * as EditNote from './../edit-note/edit-note.component';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit, OnDestroy {

  value!: boolean;

  constructor( 
    parent: EditNoteComponent,

    private dialogRef: MatDialogRef<ErrorMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    debugger;
    // this.parent.popUp$.subscribe((data) => console.log(data));
  }

  public closeMe() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log('massage pannel onInit');
    debugger;
  }

  ngOnDestroy(): void {}
}
