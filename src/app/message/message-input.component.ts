import { Component } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    <label for="content">Content</label>
                    <input 
                        [ngModel]="content" 
                        type="text"
                        name="content"
                        class="form-control" 
                        #input="ngModel">
                </div>
                <button type="submit" class="btn btn-primary">Send Mesasge</button>
            </form>
        </section>
    `
})

export class MessageInputComponent {
    constructor(private _messageService: MessageService) {}

    onSubmit(form:any) {
        const message: Message = new Message(form.content, null, 'Dummy');
        this._messageService.addMessage(message)
            .subscribe(
                data => {
                    console.log(data);
                    this._messageService.messages.push(data);
                },
                error => console.error(error)
            );;
    }
}