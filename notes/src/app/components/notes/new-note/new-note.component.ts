import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit{

  categoryOptions: any = [];

  form:FormGroup = this.formBuilder.group({
    title:['', [Validators.required]],
    content:['', [Validators.required]],
    category:[[[]], [Validators.required]],
    archived: false,
    id: 0
  })

  constructor(private formBuilder: FormBuilder, private NotesService: NotesService, private router:Router){}

  ngOnInit(): void {
    
  }
  
  createNote(){
    if (this.form.invalid) return;

    const note: note = {
      title: this.form.controls['title'].value,
      content: this.form.controls['content'].value,
      category: this.form.controls['category'].value,
      archived: this.form.controls['archived'].value,
      id: this.form.controls['id'].value
    }
    this.NotesService.postNote(note).subscribe({
      next: (n) =>{
        alert(`Note ${n.title} created`)
        this.router.navigate(['home'])
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
