import { Component, Input } from '@angular/core';

@Component({
    selector:'notes-thumbnail',
    templateUrl:'./notes-thumbnail.component.html',
    styleUrls:['./notes-thumbnail.component.css']

})
export class NotesThumbnailComponent{
    @Input() note:any;
}