import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import { Message } from './message';

@Component({
    selector: 'message-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <message
                *ngFor="let message of messagesData" 
                [message]="message" 
                (editClicked)="message.content = $event">
            </message>
        </section>
    `,
    directives: [MessageComponent]
})

export class MessageListComponent {
    messagesData:Message[];

    ngOnInit() {
        this.messagesData = [
            new Message('This is a new clever message', null, 'Clint'),
            new Message('This is another message', null, 'Sally'),
            new Message('This is a lame message', null, 'Jim')
        ];
    }
}