import { Component } from '@angular/core';
import { Message } from './message';

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
    onCreate(content: string) {
        const message: Message = new Message(content, null, 'Dummy');
        console.log(message);
    }
}