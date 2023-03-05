import { NoteDetailsDto, NoteDto } from './../../interfaces/api/note';
import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from 'src/app/services/api/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-full',
  templateUrl: './note-full.component.html',
  styleUrls: ['./note-full.component.scss']
})
export class NoteFullComponent implements OnInit {
  note: NoteDetailsDto | undefined;
  public isEditMode: boolean = false;

  editForm = new FormGroup({
    subject: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const noteId = params['guid'];

      this.noteService.getNoteByGuid(noteId).subscribe((note: NoteDetailsDto) => {
        this.note = note;

        this.editForm = new FormGroup({
          subject: new FormControl(this.note.subject),
          content: new FormControl(this.note.content),
        });
      }, (err: any) => {
        console.log("error getting notes: " + JSON.stringify(err));
      })
    });
  }

  saveNote() {
    const newNote = this.note;
    newNote!.subject = this.editForm!.get('subject')!.value;
    newNote!.content = this.editForm!.get('content')!.value;

    this.noteService.updateNoteByGuid(newNote!).subscribe((updatedNote: NoteDto) => {
      //this.note = updatedNote;
      this.isEditMode = false;
    },
    (err: any) => {
      console.log('error updating notes: ' + JSON.stringify(err));
    });
  }

  editNote() {
    this.isEditMode = true;
  }

  deleteNote() {
    const guid = this.note!.guid;
    if (guid === undefined) {
      console.log('cannot delete note, guid is missing');
      return;
    }

    this.noteService.deleteNoteByGuid(guid).subscribe((res: any) => {
      //this.dialogRef.close(true);
    },
    (err: any) => {
      console.log('error updating notes: ' + JSON.stringify(err));
    })
  }
}
