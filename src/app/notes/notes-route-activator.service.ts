import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { NotesService } from './shared/notes.service';

@Injectable()
export class NotesRouteActivator implements CanActivate{

    constructor( private noteService: NotesService,
                private router: Router)
    {

    }

    canActivate(route: ActivatedRouteSnapshot){
        var noteId = route.params['id'];
        const noteExists = !!this.noteService.getNote(+ noteId);

        if(!noteExists)
            this.router.navigate(['error']);
        
        return noteExists;
    }
}