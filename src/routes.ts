import { Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { NotesListComponent } from "./app/notes/notes-list.component";
import { NotesDetailsComponent } from "./app/notes/notes-details.component";
import { CreateNoteComponent } from "./app/notes/create-note/create-note.component";
import { Error404Component } from "./app/errors/error404.component";
import { NotesRouteActivator } from "./app/notes/notes-route-activator.service";

export const routes:Routes=[
    {
        path: 'notes/new',
        component: CreateNoteComponent
    },
    {
        path: 'error',
        component: Error404Component
    },
    {
        path:'',
        redirectTo:'/notes',
        pathMatch: 'full'
    },
    {
        path:'notes',
        component:NotesListComponent
    },
    {
        path:'notes/:id',
        component:NotesDetailsComponent,
        canActivate: [NotesRouteActivator]
    }
]