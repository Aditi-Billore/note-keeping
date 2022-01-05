import { Component } from '@angular/core';
import { NotesService } from './shared/notes.service';

@Component({
    selector: 'notes-list',
    template:`
    <div class="notes-container input-container">
        <input class="input-box" type="text" placeholder="title" [(ngModel)]="note.title">
        <input class="input-box" type="text" placeholder="tag" [(ngModel)]="note.tags">
        <input class="input-box" type="text" placeholder="body" [(ngModel)]="note.content">
        <button (click)="clickCalled();" >Submit</button>
    </div>
    <div class="notes-container">
        <div *ngFor="let note of notes">
            <notes-thumbnail [routerLink]="[note.id]" [note]="note"></notes-thumbnail>
        </div>
    </div>
    `,
    styles:[`
        .notes-container{
            margin: 0% 10% 0% 10%;
            width: 70%;
            align-items: center;
        }
        .input-container{
            border-radius: 20px;
            border-color: rgb(219, 219, 219);
            border-style: solid;
            border-width: 0.5px;
            display: flex;
            flex-direction: column;
            color:white;
            margin-top: 10px;
        }
        .input-box{
            width: 80%;
            background: grey;
        }
    `]
})
export class NotesListComponent{
    notes:any;
    note = {
      id: 10,
      title: '',
      content: '',
      tags: '',
    }


    constructor(private notesService: NotesService){
    }

    ngOnInit(){
        this.notes = this.notesService.getNotes();
    }

    clickCalled(){
      console.log(this.note.title);
      console.log(this.note.tags);
      console.log(this.note.content);
      this.notesService.putNote(this.note);
      this.ngOnInit();
    }

}
