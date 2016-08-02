import { Component, OnInit } from '@angular/core';
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
                        [ngModel]="message?.content" 
                        type="text"
                        name="content"
                        class="form-control" 
                        #input="ngModel">
                </div>
                <button type="submit" class="btn btn-primary">{{ !message ? 'Send Message' : 'Save Message'}}</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="message">Cancel</button>
            </form>
        </section>
    `
})

export class MessageInputComponent implements OnInit {
    message: Message = null;

    constructor(private _messageService: MessageService) {}

    onSubmit(form:any) {
        if (this.message) {
            // Edit message
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
            this.message = null;
        } else {
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

    onCancel() {
        this.message = null;
    }

    ngOnInit() {
        this._messageService.messageIsEdit.subscribe(
            message => {
                this.message = message;
            }
        );
    }
}