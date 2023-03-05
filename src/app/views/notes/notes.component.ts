import { FolderListComponent } from './../folder/folder-list/folder-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FolderAddComponent } from 'src/app/components/widget/folder-add/folder-add.component';
import { NoteAddComponent } from 'src/app/components/widget/note-add/note-add.component';
import { NoteDto } from 'src/app/interfaces/api/note';
import { DialogResponse, DialogResponseOperation } from 'src/app/interfaces/web/dialog-response';
import { FolderService } from 'src/app/services/api/folder.service';
import { LayoutService } from 'src/app/services/web/layout.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @ViewChild(FolderListComponent ) folderList?: FolderListComponent;

  public folderId: number | undefined;
  public noteList: NoteDto[] | undefined;

  opened$ = this.layoutService.isDesktop$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private folderService: FolderService,
    private layoutService: LayoutService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const folderId = params['id'];
      this.folderId = folderId;
      this.reloadNotes(folderId);
    });
  }

  private reloadNotes(folderId: number | undefined): void {
    if (folderId === undefined) {
      return;
    }

    this.folderService.getNotesFolders(folderId).subscribe(
      (notes: NoteDto[]) => {
        this.noteList = notes;
      },
      (err: any) => {
        console.log('noteService.getNotes err: ' + err, err);
      }
    );
  }

  addNote() {
    const ref = this.dialog.open(NoteAddComponent);

    ref.afterClosed().subscribe((resp: DialogResponse) => {
      //TODO: return folder id of selected folder, refresh with returned value (move to the folder where note was added)

      if (resp.operation == DialogResponseOperation.CREATE_NOTE && resp.res == true) {
        this.reloadNotes(this.folderId);
      }
    }, (err: any) => {
      console.log('dialog closed err: ' + err);
    });
  }

  addFolder() {
    const ref = this.dialog.open(FolderAddComponent);

    ref.afterClosed().subscribe((resp: DialogResponse) => {
      if (resp.operation == DialogResponseOperation.CREATE_FOLDER && resp.res == true) {
        this.folderList?.refreshFolders();
      }
    }, (err: any) => {
      console.log('dialog closed err: ' + err);
    });
  }

  onDeleteNote(resp: DialogResponse) {
    if (resp.operation == DialogResponseOperation.DELETE_NOTE && resp.res == true) {
      this.reloadNotes(this.folderId);
    }
  }
}
