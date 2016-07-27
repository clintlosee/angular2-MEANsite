import { Component, OnInit } from '@angular/core';
import { MessageComponent } from './message.component';
import { Message } from './message';
import { MessageService } from './message.service';

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

export class MessageListComponent implements OnInit {
    messagesData:Message[];
    
    constructor(private _messageService: MessageService) {
        
    }

    ngOnInit() {
        this.messagesData = this._messageService.getMessages();
    }
}