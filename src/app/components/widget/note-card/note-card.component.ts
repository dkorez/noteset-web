import { NoteDetailsDto } from './../../../interfaces/api/note';
import { NoteService } from 'src/app/services/api/note.service';
import { DialogResponse, DialogResponseOperation } from 'src/app/interfaces/web/dialog-response';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDto } from 'src/app/interfaces/api/note';
import { NoteDetailsComponent } from '../note-details/note-details.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note: NoteDto | undefined;
  @Output() deleteNote: EventEmitter<DialogResponse> = new EventEmitter();

  constructor(public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit() {
  }

  openNote() {
    const guid = this.note?.guid;
    if (guid === undefined) {
      console.log('cant open note, guid is missing');
      return;
    }

    this.noteService.getNoteByGuid(guid).subscribe((noteDetails: NoteDetailsDto) => {
      const ref = this.dialog.open(NoteDetailsComponent, {
        data: noteDetails,
      });

      ref.afterClosed().subscribe((res: any) => {
        const resp: DialogResponse = {
          operation: DialogResponseOperation.DELETE_NOTE,
          res: true
        };
        this.deleteNote.emit(resp);
      }, (err: any) => {
        console.log('dialog closed err: ' + err);
      });
    }, (err: any) => {
      console.log(`error fetching note details for guid ${guid}: ` + JSON.stringify(err));
    });
  }

}
