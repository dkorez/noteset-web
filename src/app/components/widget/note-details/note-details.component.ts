import { NoteDetailsDto, NoteDto, NoteType } from './../../../interfaces/api/note';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from 'src/app/services/api/note.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  public isEditMode: boolean = false;

  editForm = new FormGroup({
    subject: new FormControl(this.note.subject),
    content: new FormControl(this.note.content),
    noteType: new FormControl(this.note.noteType),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public note: NoteDetailsDto, private dialogRef: MatDialogRef<NoteDetailsComponent>, private noteService: NoteService) {
  }

  ngOnInit() {
  }

  saveNote() {
    const newNote = this.note;
    newNote.subject = this.editForm.get('subject')!.value;
    newNote.content = this.editForm.get('content')!.value;
    newNote.noteType = this.editForm.get('noteType')!.value;

    this.noteService.updateNoteByGuid(newNote).subscribe((updatedNote: NoteDto) => {
      this.dialogRef.close(true);
    },
    (err: any) => {
      console.log('error updating notes: ' + JSON.stringify(err));
    });
  }

  editNote() {
    this.isEditMode = true;
  }

  deleteNote() {
    const guid = this.note.guid;
    if (guid === undefined) {
      console.log('cannot delete note, guid is missing');
      return;
    }

    this.noteService.deleteNoteByGuid(guid).subscribe((res: any) => {
      this.dialogRef.close(true);
    },
    (err: any) => {
      console.log('error updating notes: ' + JSON.stringify(err));
    });
  }

  getNoteTypes(): string[] {
    return Object.keys(NoteType).filter(key => isNaN(Number(key)));
  }
}
