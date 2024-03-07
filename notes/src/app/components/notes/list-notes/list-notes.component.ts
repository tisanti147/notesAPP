import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit{
  showArchived: boolean | undefined;

  constructor(private notesService: NotesService){}

  noteList: note[] | undefined = [];

  categoryList: any = [];

  ngOnInit(): void {
    this.showNotes()
    //this.toggleFilter()
  }

  showNotes(){
    this.notesService.getNotes().subscribe(
      {
        next: (n) =>{
          this.noteList = n;
        },
        error: (err) =>{
          console.log(err);
        }
      }
    )
  }

  toggleFilter(){
    this.showArchived = !this.showArchived;
    this.notesService.getNotes().pipe(
      map(notes => this.showArchived ? notes.filter(note => note.archived) : notes.filter(note => !note.archived))
    ).subscribe(
      {
        next: (filteredNotes) => {
          this.noteList = filteredNotes;
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  deleteNote(id:any){
    const ok = confirm(`Do you wish to delete the selected note?`)
    if(!ok) return;
    this.notesService.deleteNote(id).subscribe(
      {
        next: () =>{
          alert(`Note deleted`)
        },
        error: (err) =>{
          console.log(err);
        }
      }
    )
  }

}
