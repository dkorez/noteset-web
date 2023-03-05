import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FolderDto } from 'src/app/interfaces/api/folder';
import { NoteDto } from 'src/app/interfaces/api/note';
import { NotesetApiService } from './noteset-api.service';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private apiService: NotesetApiService) { }

  public getFolders(): Observable<FolderDto[]> {
    return this.apiService.getRequest('folders/');
  }

  public createFolder(newFolder: FolderDto): Observable<FolderDto> {
    return this.apiService.postRequest('folders/', newFolder);
  }

  public deleteFolder(folderId: number): Observable<void> {
    return this.apiService.deleteRequest(`folders/${folderId}`);
  }

  public getNotesFolders(folderId: number): Observable<NoteDto[]> {
    return this.apiService.getRequest(`folders/${folderId}/notes`);
  }
}
