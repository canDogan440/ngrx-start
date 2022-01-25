import { AppState } from 'src/app/reducers';
import { finalize } from 'rxjs/operators';
import { NoteService } from './../../services/note.service';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectAllNotes } from '../notes.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  notesData!: any;
  notesComeFromStore: any;
  transferedNotesDataComeFromStore: any;
  mergeOfStoreDataAndNormalData: any;
  isLoading: boolean = false;

  allNotes$: Observable<any> | undefined;

  constructor(
    private notesService: NoteService,
    private store: Store<AppState>,
    private cd: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = true;
      console.log(this.isLoading);
      this.cd.detectChanges();
      console.log(this.cd.detectChanges())
    }, 400);
  }

  ngOnInit(): void {
    this.display();
    // this.getLocalStorageData();
  }

  display() {
    this.allNotes$ = this.store.pipe(select(selectAllNotes));
  }

  // getLocalStorageData() {
  //   this.notesComeFromStore = localStorage.getItem('notes');
  //   this.transferedNotesDataComeFromStore = JSON.parse(this.notesComeFromStore);
  //   this.mergeOfStoreDataAndNormalData = [
  //     ...this.notesData,
  //     ...this.transferedNotesDataComeFromStore,
  //   ];
  //   console.log(this.mergeOfStoreDataAndNormalData);
  // }
}
