import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from 'src/routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesThumbnailComponent } from './notes/notes-thumbnail.component';
import { NotesListComponent } from './notes/notes-list.component';
import { NotesService } from './notes/shared/notes.service';
import { CreateNoteComponent } from './notes/create-note/create-note.component';
import { Error404Component } from './errors/error404.component';
import { NotesRouteActivator } from './notes/notes-route-activator.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesThumbnailComponent,
    NotesListComponent,
    CreateNoteComponent,
    Error404Component,
    SideMenuComponent
  ],
  providers: [
    NotesService,
    NotesRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
