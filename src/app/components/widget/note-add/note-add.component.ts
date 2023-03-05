import { FolderDto } from './../../../interfaces/api/folder';
import { NoteDto, CreateNoteRequest, NoteType } from './../../../interfaces/api/note';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/api/note.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FolderService } from 'src/app/services/api/folder.service';
import { DialogResponse, DialogResponseOperation } from 'src/app/interfaces/web/dialog-response';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {
  folders: FolderDto[] | undefined;

  editForm = new FormGroup({
    subject: new FormControl(''),
    content: new FormControl(''),
    noteType: new FormControl(''),
    folder: new FormControl('')
  });

  constructor(private dialogRef: MatDialogRef<NoteAddComponent>, private noteService: NoteService, private folderService: FolderService) { }

  ngOnInit(): void {
    this.folderService.getFolders().subscribe((folders: FolderDto[]) => {
      this.folders = folders;
    }, (err: any) => {
      console.log('cant fetch folders: ' + JSON.stringify(err));
    });
  }

  saveNote() {
    let newNote: CreateNoteRequest = {
      subject: this.editForm.get('subject')!.value,
      content: this.editForm.get('content')!.value,
      noteType: this.editForm.get('noteType')!.value,
      folderId: this.editForm.get('folder')!.value
    };

    this.noteService.createNote(newNote).subscribe((createdNote: NoteDto) => {
      let resp: DialogResponse  = {
        operation: DialogResponseOperation.CREATE_NOTE,
        res: true
      }

      this.dialogRef.close(resp);
    },
    (err: any) => {
      console.log('error creating note: ' + JSON.stringify(err));
    })
  }

  getNoteTypes(): string[] {
    return Object.keys(NoteType).filter(key => isNaN(Number(key)));
  }
}
