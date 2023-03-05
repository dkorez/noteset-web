import { DialogResponse, DialogResponseOperation } from 'src/app/interfaces/web/dialog-response';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderDto } from 'src/app/interfaces/api/folder';
import { FolderService } from 'src/app/services/api/folder.service';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit {
  public folders: FolderDto[] | undefined;
  public selFolderId: number | undefined;

  constructor(private activatedRoute: ActivatedRoute, private folderService: FolderService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selFolderId = params['id'];
    });

    this.refreshFolders();
  }

  refreshFolders() {
    this.folderService.getFolders().subscribe((folderRes: FolderDto[]) => {
      this.folders = folderRes;
    }, (err: any) => {
      console.log('err in folderService.getFolders: ' + err);
    });
  }

  onFolderAdded(resp: DialogResponse) {
    if (resp.operation == DialogResponseOperation.CREATE_FOLDER && resp.res == true) {
      this.refreshFolders();
    }
  }

}
