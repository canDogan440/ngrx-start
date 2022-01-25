import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {


  public popUp$: Subject<boolean> = new Subject();

  public email: string = '';
  public password: string = '';

  constructor(private dialog: MatDialog, private router: Router) {}
  
  public openForm() {
    this.popUp$.next(true);

    this.popUp$.subscribe((value: any) => {
      if (value == true) {
        console.log("[popUp$ from edit-component] obs type :",typeof value)
        console.log("[popUp$ from edit-component] obs value :",value)
        console.log("neden?")

        console.log("lan derdin ne" , console.error(typeof this.popUp$))

        console.log("obje gelmelei :::::::>   ", typeof this.popUp$)
        this.dialog.open(ErrorMessageComponent, {});
      }
    });
  }

  ngOnInit(): void {}

  // openForm() {
  //   this.popUp = !this.popUp;
  // }
}
