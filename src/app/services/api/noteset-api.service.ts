import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesetApiService {
  private noteSetApiUrl = environment.NOTESET_API_URL;

  constructor(private http: HttpClient) { }

  public getRequest(endpoint: string): Observable<any> {
    const url = `${this.noteSetApiUrl}/${endpoint}`;

    return this.http.get(url);
  }

  public postRequest(endpoint: string, body: any): Observable<any> {
    const url = `${this.noteSetApiUrl}/${endpoint}`;

    return this.http.post(url, body);
  }

  public putRequest(endpoint: string, body: any): Observable<any> {
    const url = `${this.noteSetApiUrl}/${endpoint}`;

    return this.http.put(url, body);
  }

  public patchRequest(endpoint: string, body: any): Observable<any> {
    const url = `${this.noteSetApiUrl}/${endpoint}`;

    return this.http.patch(url, body);
  }

  public deleteRequest(endpoint: string): Observable<any> {
    const url = `${this.noteSetApiUrl}/${endpoint}`;

    return this.http.delete(url);
  }
}
