import { CreateNoteRequest, NoteDetailsDto } from './../../interfaces/api/note';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteDto } from 'src/app/interfaces/api/note';
import { NotesetApiService } from './noteset-api.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private apiService: NotesetApiService) { }

  public createNote(note: CreateNoteRequest): Observable<NoteDto> {
    return this.apiService.postRequest('notes/', note);
  }

  public getNotes(): Observable<NoteDto[]> {
    return this.apiService.getRequest('notes/');
  }

  public getNoteByGuid(guid: string): Observable<NoteDetailsDto> {
    return this.apiService.getRequest(`notes/${guid}`);
  }

  public updateNoteByGuid(note: NoteDto): Observable<NoteDto> {
    return this.apiService.putRequest(`notes/`, note);
  }

  public patchNoteByGuid(guid: string, note: NoteDto): Observable<NoteDto> {
    return this.apiService.patchRequest(`notes/${guid}`, note);
  }

  public deleteNoteByGuid(guid: string): Observable<NoteDto> {
    return this.apiService.deleteRequest(`notes/${guid}`);
  }
}
