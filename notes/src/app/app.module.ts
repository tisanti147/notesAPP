import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { NewNoteComponent } from './components/notes/new-note/new-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewNotePageComponent } from './pages/new-note-page/new-note-page.component';
import { EditNotePageComponent } from './pages/edit-note-page/edit-note-page.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNotesComponent,
    NewNoteComponent,
    EditNoteComponent,
    HomePageComponent,
    NewNotePageComponent,
    EditNotePageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
