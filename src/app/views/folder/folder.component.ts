import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteDto } from 'src/app/interfaces/api/note';
import { FolderService } from 'src/app/services/api/folder.service';
import { LayoutService } from 'src/app/services/web/layout.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {
  public folderId: number | undefined;
  public noteList: NoteDto[] | undefined;

  opened$ = this.layoutService.isDesktop$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private folderService: FolderService,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    //not reloading!
    //this.folderId = this.activatedRoute.snapshot.params["id"];

    //this.opened$ = this.layoutService.isDesktop$;

    this.activatedRoute.params.subscribe((params) => {
      const folderId = params['id'];
      console.log('subscr this.folderId: ' + folderId);
      this.reloadNotes(folderId);
    });
  }

  private reloadNotes(folderId: number): void {
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
}
