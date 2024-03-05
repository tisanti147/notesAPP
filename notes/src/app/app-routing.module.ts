import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewNotePageComponent } from './pages/new-note-page/new-note-page.component';
import { EditNotePageComponent } from './pages/edit-note-page/edit-note-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'new', component: NewNotePageComponent},
  {path: 'edit/:id', component: EditNotePageComponent},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
