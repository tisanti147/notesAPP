import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { note } from '../interfaces/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  url:string = 'http://localhost:4000/notes'

  constructor(private http: HttpClient) { }

  getNotes(): Observable<note[]>{
    return this.http.get<note[]>(this.url)
  }

  postNote(note: note): Observable<note>{
    return this.http.post<note>(this.url, note, {headers: {'Content-type': 'application/json'}})
  }

  deleteNote(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  getNote(id: number): Observable<note>{
    return this.http.get<note>(`${this.url}/${id}`)
  }

  putNote(note: note): Observable<note>{
    return this.http.put<note>(`${this.url}/${note.id}`, note, {headers: {'Content-type': 'application/json'}})
  }
}
