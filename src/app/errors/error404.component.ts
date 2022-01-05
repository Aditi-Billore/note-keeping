import { Component } from '@angular/core';

@Component({
    selector:'error-404',
    template:`
    <div>
        You are 404'd
    </div>
    `,
    styles:[`
        div {
            font-size: 50px;
            color: white;
            text-align: center;
            margin-top: 100px;
        }
    `]
})
export class Error404Component{

}