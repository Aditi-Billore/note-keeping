import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from './shared/notes.service';

@Component({
    selector:'notes-details',
    template:`
    <div class="notes-container">
        <div class="notes-title">
            {{note.title}}
        </div>
        <div class="notes-content">
            {{note.content}}
        </div>

        <ul class="tags-list">
            <li class="tag-element" ng-repeat="tag in tags">
                {{note.tags}}
            </li>
        </ul>
    </div>
    `,
    styles:[`
    .notes-container{
        border-radius: 20px;
        border-color: rgb(219, 219, 219);
        border-style: solid;
        border-width: 0.5px;
        display: flex;
        flex-direction: column;
        color:white;
        padding: 30px;
        margin-top: 10px;
    }
    .notes-title{
        font-size: larger;
        margin-bottom: 5px;
    }
    
    .tags-list{
        display: flex;
        list-style: none;
    }
    
    .notes-content{
        word-spacing: 1px;
        color:rgb(189, 188, 187);
    }
    
    .tag-element{
        color:rgb(248, 242, 234);
        border-radius: 20px;
        border-color: rgb(145, 143, 142);
    }
    `]
})
export class NotesDetailsComponent{
    note:any;
    constructor( private routes: ActivatedRoute,
                private noteService: NotesService){

    }

    ngOnInit(){
        var noteID = this.routes.snapshot.params['id'];
        this.note = this.noteService.getNote(+ noteID); 
    }
}