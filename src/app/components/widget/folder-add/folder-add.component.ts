import { FolderDto } from 'src/app/interfaces/api/folder';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteDto } from 'src/app/interfaces/api/note';
import { DialogResponse, DialogResponseOperation } from 'src/app/interfaces/web/dialog-response';
import { FolderService } from 'src/app/services/api/folder.service';
import { NoteAddComponent } from '../note-add/note-add.component';

@Component({
  selector: 'app-folder-add',
  templateUrl: './folder-add.component.html',
  styleUrls: ['./folder-add.component.scss']
})
export class FolderAddComponent implements OnInit {
  editForm = new FormGroup({
    title: new FormControl('')
  });

  constructor(private dialogRef: MatDialogRef<NoteAddComponent>, private folderService: FolderService) { }

  ngOnInit(): void {
  }

  saveFolder() {
    let newFolder: FolderDto = {
      name: this.editForm.get('title')!.value,
    };

    this.folderService.createFolder(newFolder).subscribe((createdFolder: FolderDto) => {
      const resp: DialogResponse  = {
        operation: DialogResponseOperation.CREATE_FOLDER,
        res: true
      };

      //this.folderAdded.emit(resp);
      this.dialogRef.close(resp);
    },
    (err: any) => {
      console.log('error creating folder: ' + JSON.stringify(err));
    })
  }
}
