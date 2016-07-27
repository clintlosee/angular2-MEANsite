import { Component } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <div class="form-group">
                <label for="content">Content</label>
                <input type="text" class="form-control" #input>
            </div>
            <button type="submit" class="btn btn-primary" (click)="onCreate(input.value)">Send Mesasge</button>
        </section>
    `
})

export class MessageInputComponent {
    constructor(private _messageService: MessageService) {}

    onCreate(content: string) {
        const message: Message = new Message(content, null, 'Dummy');
        this._messageService.addMessage(message);
    }
}