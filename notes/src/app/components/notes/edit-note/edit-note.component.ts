import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{

  note:note | undefined;

  form:FormGroup = this.formBuilder.group({
    title:['', [Validators.required]],
    content:['', [Validators.required]],
    category:['', [Validators.required]],
    archived:['', [Validators.required]],
    id: 0
  })

  constructor(private formBuilder: FormBuilder, private notesService: NotesService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.route.params.subscribe (async param=>{
      const id = +param['id']
      if (!isNaN(id)){
        this.notesService.getNote(id).subscribe(
          {
            next: (n)=>{
              if(n){
                this.form = this.formBuilder.group({
                title: [n.title],
                content: [n.content],
                category: [n.category],
                archived: [n.archived],
                id: [n.id]
                })
              }
            },
            error: (err)=>{
              console.log(err);
            }
          }
        )
      }
    })
  }

  editNote(){
    if (this.form.invalid) return;

    const note: note = {
      title: this.form.controls['title'].value,
      content: this.form.controls['content'].value,
      category: this.form.controls['category'].value,
      archived: this.form.controls['archived'].value,
      id: this.form.controls['id'].value
    }
    this.notesService.putNote(note).subscribe(
      {
        next: () =>{
          this.router.navigate(['/editar'])
        },
        error: (err) =>{
          console.log(err);
        }
      }
    )
  }
}
