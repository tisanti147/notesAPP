import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { note } from '../interfaces/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  api:string = 'http://localhost:3000/notes'

  constructor(private http: HttpClient) { }

  getNotes(): Observable<note[]>{
    return this.http.get<note[]>(this.api + '/getNotes')
  }

  postNote(note: note): Observable<note>{
    return this.http.post<note>(this.api + '/postNote', note, {headers: {'Content-type': 'application/json'}})
  }

  deleteNote(id: any){
    console.log(id);
    return this.http.delete(`${this.api}/deleteNote/${id}`)
  }

  getNote(id: string): Observable<note>{
    return this.http.get<note>(`${this.api}/getNote/${id}`)
  }

  putNote(note: note, id: string): Observable<note>{
    return this.http.patch<note>(`${this.api}/putNote/${id}`, note, {headers: {'Content-type': 'application/json'}})
  }
}
