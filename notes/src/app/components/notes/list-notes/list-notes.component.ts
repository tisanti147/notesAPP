import { Component, OnInit } from '@angular/core';
import { note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit{

  constructor(private notesService: NotesService){}

  noteList: note[] | undefined = [];

  ngOnInit(): void {
    this.showNotes()
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

  deleteNote(id:number){
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
